import React from 'react';
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

const List: React.FC<ListProps> = ({ items, className }) => {
  return (
    <ul className={`list-container ${className}`}>
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <div className="list-content">
            {item.prefix && <span className="list-prefix">{item.prefix}</span>}
            <div className="list-text">
              <div className="list-title">{item.title}</div>
              {item.description && <div className="list-description">{item.description}</div>}
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
