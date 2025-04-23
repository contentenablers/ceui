import React, { useState } from 'react';
import './tabs.css';

interface TabItem {
  label: string;
  key: string;
}

interface TabsProps {
  tabs: TabItem[];
  theme?: 'primary' | 'secondary' | 'error';
  selectionType?: 'underline' | 'circle' | 'square' | 'filled'; // Added 'filled' variant
  defaultActiveKey?: string;
  onTabChange?: (activeKey: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  theme = 'primary',
  selectionType = 'underline',
  defaultActiveKey,
  onTabChange,
}) => {
  const initialTab = defaultActiveKey || tabs[0]?.key;
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    if (onTabChange) onTabChange(key);
  };

  const themeStyles: Record<string, string> = {
    primary: '#FF0A3C',
    secondary: '#30508d',
    error: '#dc3545',
  };

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`tab-item ${activeTab === tab.key ? 'active' : ''}`}
          style={{
            backgroundColor:
              selectionType === 'filled'
                ? activeTab === tab.key
                  ? '#B0B3B8' // Filled active color
                  : '#E4E6EB' // Filled inactive color
                : activeTab === tab.key &&
                  (selectionType === 'circle' || selectionType === 'square')
                ? themeStyles[theme]
                : 'transparent',
            color:
              activeTab === tab.key
                ? selectionType === 'underline' || selectionType === 'filled'
                  ? themeStyles[theme]
                  : '#fff'
                : '#000',
            borderRadius:
              activeTab === tab.key && selectionType === 'circle' ? '50%' : undefined,
          }}
          onClick={() => handleTabClick(tab.key)}
        >
          {tab.label}
          {activeTab === tab.key && selectionType === 'underline' && (
            <div
              className="underline"
              style={{ backgroundColor: themeStyles[theme] }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
