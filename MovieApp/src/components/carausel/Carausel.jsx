
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";





function Carausel({data , loading}) {
  
    const carauselContainer = useRef()
    const {url} = useSelector((state) => state.home )
    const navigate = useNavigate()
  
    const navigattion = (dir) =>{

    }


    return (
    <div ref={carauselContainer}  className="carousel">

        <ContentWrapper>
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={()=> navigattion("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={()=> navigattion("right")}
            />

            {!loading ? (
                <div className="carouselItems">
                    {data?.map((item)=>{
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        return (
                            <div   key={item.id} className="carouselItem">
                                <div className="posterBlock">
                                    <Img src={posterUrl}></Img>
                                </div>

                                <div className="textBlock">
                                    <span className="title">{item.title || item.name}</span>
                                    <span className="title">{dayjs(item.release_Date).format("MMM D, YYYY") || item.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <span>Loading....</span>
            )}

        </ContentWrapper>

    </div>
  )
}

export default Carausel