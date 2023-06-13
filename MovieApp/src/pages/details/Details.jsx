import React from 'react'

import useFetch from '../../customHooks/useFetch'
import { useParams } from 'react-router-dom'

import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'


function Details() {

  const {mediaType , id} = useParams()
  console.log("movie id" , id)
  

  //all trailers and credit details
  const {data , loading} = useFetch(`/${mediaType}/${id}/videos`)
  //const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits , loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  console.log(data, "kyo nhi aa rha")
  
  
  return (
    <div>
      <DetailsBanner video = {data?.results?.[0]} crew = {credits?.crew}></DetailsBanner>
      <Cast data = {credits?.cast} loading={creditsLoading}/>
    </div>
  )
}

export default Details