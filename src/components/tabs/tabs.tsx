import React from 'react'
import './style.scss'

interface TabsItem {
  title: string;
  content: any;
}

interface TabsProps {
  tabs: TabsItem[];
  activeTab: number;
  setActiveTab: any;
  handleOnChange?: any;
}

export const TabContent = (tabs: TabsItem) => {
  const { content } = tabs
  return <div className='tabs__content'>{content}</div>
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs, handleOnChange, activeTab, setActiveTab } = props
  const openTab = (e: any) => setActiveTab(Number(e.target.dataset.index))

  return (
    <div className='tabs__box'>
      <div className='tabs__nav'>
        {tabs.map((elem, i) => (
          <button
            className={`${
              i === activeTab ? 'tabs__item__active' : 'tabs__item'
            }`}
            onClick={(e) => {
              openTab(e)
              handleOnChange && handleOnChange(e)
            }}
            data-index={i}
            key={i}
          >
            {elem.title}
          </button>
        ))}
      </div>
      {tabs[activeTab] && <TabContent {...tabs[activeTab]} />}
    </div>
  )
}
