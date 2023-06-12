import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../customHooks/useFetch'




function Trending() {
    const [endpoint , setEndpoint] = useState("day")

    const {data , loading} = useFetch(`/trending/all/${endpoint}`)

    //whenever we change the tab we want to fetch the data 
    const onTabChange = (tab) => {

        let parameter = ""
        if(tab === "Day"){
            parameter = "day"
        }else if(tab === "Week"){
            parameter = "week"
        }else if(tab === "Month"){
            parameter = "month"
        }else if(tab === "Year"){
            parameter = "year"
        }

        setEndpoint(parameter)
    }

  return (
    <div className='carauselSection'>
        <ContentWrapper>
            <span className="carauselTitle">Trending Now</span>
            <SwitchTabs data = {["Day" , "Week" , "Month" , "Year"]} onTabChange = {onTabChange}></SwitchTabs>
        </ContentWrapper>
    </div>
  )
}

export default Trending