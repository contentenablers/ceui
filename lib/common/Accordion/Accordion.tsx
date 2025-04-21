import { useState } from "react";
import "./Accordion.css"; // Import CSS file

interface AccordionItem {
  header: JSX.Element;
  content: JSX.Element;
}

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

  return (
    <div className={`accordion-container ${className}`} style={{ width, height }}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              style={{ backgroundColor: headerBgColor }}
              onClick={() => toggleItem(index)}
            >
              <div className="accordion-header-content">
                {iconPosition === "start" && icon}
                <div className="accordion-header-text">{item.header}</div>
                {iconPosition === "end" && icon}
              </div>
            </button>

            <div className={`accordion-content ${isOpen ? "open" : ""} ${animation}`}>
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
