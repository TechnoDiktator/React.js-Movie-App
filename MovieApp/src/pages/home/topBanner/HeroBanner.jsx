import React from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import useFetch from '../../../customHooks/useFetch';
import { useSelector } from 'react-redux';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';



function HeroBanner() {
    const [background , setBackground] = useState("")
    const [query , setQuery] = useState("")
    const navigate = useNavigate();


    //getting the url state from the store
    const {url} = useSelector((state)=> state.home)
    const {data , loading} = useFetch("/movie/upcoming")


    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[ Math.floor(  Math.random()*20 ) ]?.backdrop_path
        console.log(bg)
        setBackground(bg)

    },[data])


    const searchHandler = (event) => {
        if(event.key === "Enter"  && query.length > 0){
            navigate(`/search/${query}`)
        }
    }
    

    
    const searchMouseHandler = (event) => {
        if(query.length > 0){
            navigate(`/search/${query}`)
        }
    }

  return (
    <div className="heroBanner">
        { !loading &&<div className="backdrop-img">
             <Img src={background}></Img>
        </div>}

        <div className="opacity-layer">

        </div>




        <ContentWrapper>
                
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome to IMDB</span>
                    <span className="subTitle">A one stop solution for all your movie cravings !!</span>
                    <h4>Made by Tarang Rastogi</h4>

                    <div className="searchInput">
                        <input 
                        type="text" 
                        placeholder='Search for a movie or T.V. show ....'  
                        onKeyUp={(e)=>{searchHandler(e)}} 
                        onChange={(e)=>{setQuery(e.target.value)}}
                        />
                        <button onClick={(e)=>{searchMouseHandler(e)}} type="">Search</button>
                    </div>
                
                </div>
            </div>

        </ContentWrapper>

    </div>
  )
}

export default HeroBanner