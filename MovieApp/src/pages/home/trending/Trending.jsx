import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../customHooks/useFetch'

import Carausel from '../../../components/carausel/Carausel'


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
        }
        setEndpoint(parameter)
    }

  return (
    <div className='carauselSection'>
        <ContentWrapper>
            <span className="carauselTitle">Trending Now</span>
            <SwitchTabs data = {["Day" , "Week" ]} onTabChange = {onTabChange}></SwitchTabs>
        </ContentWrapper>
        {/* Carausel */}
        <Carausel data={data?.results} loading = {loading}></Carausel>


    </div>
  )
}

export default Trending