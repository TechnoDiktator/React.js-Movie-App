import React from 'react'
import "./style.scss"
import { useState } from 'react'

function SwitchTabs({data , onTabChange}) {
  
    const [selectedTab , setSelectedTab] = useState(0)
    const [left , setLeft] = useState(0)

    const activeTab = (tab , index) => {
        //basically mobing the tab outline 
        setLeft(index*100)
        setTimeout(()=>{
            setSelectedTab(index)
        },300)

        //after we have selected the tab then we will make the api call
        onTabChange(tab, index)
    }

    return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab , index) => (
                <span onClick={()=>activeTab(tab , index)} key={index} className= {`tabItem ${selectedTab === index ? "active" : "" } ` } >{tab}</span>
            ))}
            <span className="movingBg" style={{left}}></span>
        </div>
    </div>
  )
}

export default SwitchTabs