import React,{useState,useEffect} from 'react';
import "./list.css";

interface ListItem {
  id?: string | number;
  title: string;
  description?: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  sublist?: ListItem[];
}

interface ListProps {
  items: ListItem[];
  className?: string;
}
type ListThemeVars = {
  title:React.CSSProperties;
  subtitle:React.CSSProperties;
};

const List: React.FC<ListProps> = ({ items, className }) => {
    const [themeVars, setThemeVars] = useState<ListThemeVars| null>(null);
   useEffect(() => {
      // Inject the fixed-tokens-theme class ONCE
      if (typeof document !== "undefined") {
        const el = document.documentElement; // or document.body
        if (!el.classList.contains("fixed-tokens-theme")) {
          el.classList.add("fixed-tokens-theme");
        }
      }
  
      const root = document.querySelector(".fixed-tokens-theme") || document.documentElement;
      const getVar = (name: string) =>
        getComputedStyle(root).getPropertyValue(name)?.trim();
      setThemeVars(()=>({
        title:{
          color:getVar("--list-title-color")
        },
        subtitle:{
          color:getVar( "--list-subtitle-color")
        }
      }))
  
    }, [items]);

  return (
    <ul className={`list-container ${className}`}>
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <div className="list-content">
            {item.prefix && <span className="list-prefix">{item.prefix}</span>}
            <div className="list-text">
              <div className="list-title" style={{...themeVars?.title}}>{item.title}</div>
              {item.description && <div className="list-description" style={{...themeVars?.subtitle}}>{item.description}</div>}
            </div>
            {item.suffix && <span className="list-suffix">{item.suffix}</span>}
          </div>
          {item.sublist && item.sublist.length > 0 && <List items={item.sublist} className="nested-list" />}
        </li>
      ))}
    </ul>
  );
};

export default List;
