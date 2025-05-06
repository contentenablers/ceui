import React, {useCallback, useEffect, useRef, useState } from 'react';
import './LazyImage.css';
// import placeholder from './placeholder.webp';
/**
 * A lazy-loaded image component that uses IntersectionObserver to determine
 * when the image is visible in the viewport. It takes the following props:
 * - `src`: The source URL of the image
 * - `alt`: The alt text for the image
 * - `srcSet`: An optional srcSet attribute for responsive images
 * - `sizes`: An optional sizes attribute for responsive images
 * - `placeholder`: An optional placeholder image to display while the image is loading
 * - `className`: An optional className for styling
 * - `style`: An optional style object for styling
 * - `width`: An optional width for the image
 * - `height`: An optional height for the image
 *
 * By default, the image will be displayed at 100% width and auto height.
 * When the image is not in view, a placeholder image is displayed, 
 * When the image is in view, the image is loaded
 * and the placeholder is replaced with the loaded image.
 */
export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;  // optional srcSet for responsive images
  sizes?: string;   // new optional sizes attribute for responsive images
  //placeholder?: string;  // optional placeholder image while loading
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  // placeholder = placeholderimage,
  className = '',
  style = {},
  width = '100%',
  height = 'auto',
  srcSet,
  sizes,
}) => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);  // Track when the image is loaded
  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             setIsInView(true);
            observer.disconnect(); // stop observing after the image has entered the view
          }
        });
      },
      { threshold: 0.1 } // trigger when the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
   <img
      ref={imageRef}
      src={(isInView ? src : "https://assets.contentenablers.com/storefront_stg/imgs/ce_new_logo_skill_comp.webp?imwidth=750")}
      srcSet={(isInView && srcSet )? srcSet : undefined}  // only set srcSet when in view
      sizes={sizes}  // optionally add a sizes attribute for responsive images
      alt={alt}
      className={`${className} ceui-lazy-lazy-image ${isLoaded ? 'loaded' : ''}`}
      style={{ ...style, width, height }}
      loading='lazy'
      onLoad={handleImageLoad}
    /> 
   </>
  );
};

export default LazyImage;
