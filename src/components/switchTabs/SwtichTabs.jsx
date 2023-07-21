import React, {useState} from 'react'

import './switchTabs.scss'

const SwtichTabs = ({ data, onTabChange}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTabChange = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 1000);

        onTabChange(tab, index);
    }

  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {
                data?.map((tab, index) => (
                    <span 
                        key={index} 
                        className={`tabItem ${selectedTab === index ? 'active' : ''}`}
                        onClick={() => activeTabChange(tab, index)}
                    >
                        {tab}
                    </span>
                ))
            }
            <span className='movingBg' style={{left}} />
        </div>
    </div>
  )
}

export default SwtichTabs