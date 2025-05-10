import { useState, useEffect, useLayoutEffect } from "react";
import "./Accordion.css"; // Import CSS file

interface AccordionItem {
  header: JSX.Element;
  content: JSX.Element;
}

type AccordionThemeVars = {
  padding: string;
  gap: string;
  borderRadius: string;
  closedBackgroundColor: string;
  openBackgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  borderColor: string;
  borderWidth: string;
};

interface AccordionProps {
  items: AccordionItem[];
  singleExpand?: boolean;
  headerBgColor?: string;
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
  className?: string;
  width?: string;
  height?: string;
  animation?: "fade" | "slide" | "scale" | "height" | "bounce" | "slide-height";
}

const DefaultIcon = () => <div className="default-icon" />;

const Accordion: React.FC<AccordionProps> = ({
  items,
  singleExpand = true,
  headerBgColor = "#efeded",
  icon = <DefaultIcon />,
  iconPosition = "end",
  className = "",
  width = "700px",
  height = "auto",
  animation = "slide-height",
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [accordionVars, setAccordionVars] = useState<AccordionThemeVars | null>(null);
  const [hasTheme, setHasTheme] = useState(false);

    useEffect(() => {
      // Inject the fixed-tokens-theme class ONCE
      if (typeof document !== "undefined") {
        const el = document.documentElement; // or document.body
        if (!el.classList.contains("fixed-tokens-theme")) {
          el.classList.add("fixed-tokens-theme");
        }
      }
    }, []);

    useEffect(() => {
      const root = document.querySelector(".fixed-tokens-theme") || document.documentElement;
    
      const getVar = (name: string) =>
        getComputedStyle(root).getPropertyValue(name)?.trim();
    
      const applyVars = () => {
        const padding = getVar("--accordion-padding");
        if (!padding) return false; // If still empty, return false
    
        setAccordionVars({
          padding,
          gap: getVar("--accordion-gap"),
          borderRadius: getVar("--accordion-border-radius"),
          closedBackgroundColor: getVar("--accordion-closed-backgroundcolor"),
          openBackgroundColor: getVar("--accordion-open-background-color"),
          titleColor: getVar("--accordion-title-color"),
          subtitleColor: getVar("--accordion-subtitle-color"),
          borderColor: getVar("--accordion-primary-border-color"),
          borderWidth: getVar("--accordion-primary-border-width"),
        });
        setHasTheme(true);
        return true;
      };
    
      // Try once immediately
      if (applyVars()) return;
    
      // Set up observer if values not ready yet
      const observer = new MutationObserver(() => {
        if (applyVars()) {
          observer.disconnect();
        }
      });
    
      observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    
      return () => observer.disconnect();
    }, []);
    
    
  
  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      if (singleExpand) {
        return prev.includes(index) ? [] : [index];
      } else {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
    });
  };

  const getItemStyle = (isOpen: boolean) => ({
    backgroundColor: isOpen
      ? accordionVars?.openBackgroundColor
      : accordionVars?.closedBackgroundColor,
    border: `${accordionVars?.borderWidth} solid ${accordionVars?.borderColor}`,
    borderRadius: accordionVars?.borderRadius,
  });

  return (
    <div className={`accordion-container ${className}`} style={{ width, height, gap:accordionVars?.gap }}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className="accordion-item" style={getItemStyle(isOpen)}>
            <button
              className="accordion-header"
              style={{ backgroundColor: headerBgColor,padding:accordionVars?.padding }}
              onClick={() => toggleItem(index)}
            >
              <div className="accordion-header-content">
                {iconPosition === "start" && icon}
                <div className="accordion-header-text">{item.header}</div>
                {iconPosition === "end" && icon}
              </div>
            </button>

            <div className={`accordion-content ${isOpen ? "open" : ""} ${animation}`}>
              <div className="accordion-body" style={{padding:accordionVars?.padding}}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
