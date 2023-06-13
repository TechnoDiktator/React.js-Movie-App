import "../header/style.scss"
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();  //current location


    useEffect(() => {
        window.addEventListener("scroll"  , controlNavbar)
        
        return () => {
            window.removeEventListener("scroll"  , controlNavbar)
        }
    },[lastScrollY])


    useEffect(()=>{
        //hwenever location changes ...that is we go to new page ....set scroll to  0 , 0 
        window.scrollTo(0,0)
    },[location])


    //basically ye header bar ke transparency ke liye hai
    const controlNavbar = () => {
        if(window.scrollY  > 200 ){
            if(window.scrollY  > lastScrollY  && !mobileMenu){
                setShow("hide")
            }else{
                setShow("show")
            }
        }else{
            setShow("top")
        }
        setLastScrollY(window.scrollY)

    }




    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    }

    const openMobileMenu = () =>{
        setMobileMenu(true)
        setShowSearch(false)
    }

    const navigationHandler = (type) =>{
        if(type == "movie"){
            navigate("/explore/movie")
        }else{
            navigate("/explore/tv")
        }
        
        setMobileMenu(false)
    }
    
    const searchHandler = (event) => {
        if(event.key === "Enter"  && query.length > 0){
            navigate(`/search/${query}`)
            setTimeout(() => {
                setShowSearch(false)
            } , 1000)
        }

    }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo">
                    <img src={logo} alt=""  onClick={()=>{navigate("/")}}/>
                </div>

                <ul className="menuItems">
                    <li className="menuItem" onClick={()=>{ navigationHandler("movie")}}>Movies</li>
                    <li className="menuItem" onClick={()=>{ navigationHandler("tv")}}>T.V Shows</li>
                    <li className="menuItem" onClick={openSearch}>
                        <HiOutlineSearch></HiOutlineSearch>
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch}></HiOutlineSearch>
                    {mobileMenu ? (
                        <VscChromeClose onClick={()=>{setMobileMenu(false)}}></VscChromeClose>
                    ) : (
                        <SlMenu onClick={openMobileMenu}></SlMenu>
                    )}


                </div>
            </ContentWrapper>
            
            {showSearch && 
            (<div className="searchBar">
                <ContentWrapper>
                
                    <div className="searchInput">
                            <input 
                            type="text" 
                            placeholder='Search for a movie or T.V. show ....'  
                            onKeyUp={(e)=>{searchHandler(e)}} 
                            onChange={(e)=>{setQuery(e.target.value)}}
                            />
                    </div>
                    <VscChromeClose onClick={()=>{setShowSearch(false)}}></VscChromeClose>


                </ContentWrapper>
            </div>
            )}


        </header>
    );

};

export default Header;









