import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../customHooks/useFetch'

import Carausel from '../../../components/carausel/Carausel'


const Popular = () => {
    const [endpoint , setEndpoint] = useState("movie")

    const {data , loading} = useFetch(`/${endpoint}/popular/`)

    //whenever we change the tab we want to fetch the data 
    const onTabChange = (tab) => {

        let parameter = ""
        if(tab === "Movies"){
        }else if(tab === "TV Shows"){
            parameter = "tv"
        }
        setEndpoint(parameter)
    }

  return (
    <div className='carauselSection'>
        <ContentWrapper>
            <span className="carauselTitle">What's Popular</span>
            <SwitchTabs data = {["Movies" , "TV Shows" ]} onTabChange = {onTabChange}></SwitchTabs>
        </ContentWrapper>
        {/* Carausel */}
        <Carausel data={data?.results} loading = {loading} endpoint={endpoint}   ></Carausel>


    </div>
  )
}

export default Popular