// declarations.d.ts

// Images
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Videos
declare module "*.mp4" {
  const value: string;
  export default value;
}
declare module "*.webm" {
  const value: string;
  export default value;
}

// Audio
declare module "*.mp3" {
  const value: string;
  export default value;
}
declare module "*.wav" {
  const value: string;
  export default value;
}
declare module "*.ogg" {
  const value: string;
  export default value;
}

// Fonts
declare module "*.woff" {
  const value: string;
  export default value;
}
declare module "*.woff2" {
  const value: string;
  export default value;
}
declare module "*.ttf" {
  const value: string;
  export default value;
}
declare module "*.eot" {
  const value: string;
  export default value;
}

// JSON (optional, usually handled automatically)
declare module "*.json" {
  const value: any;
  export default value;
}

// CSS Modules (optional, if you're using CSS modules)
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}
