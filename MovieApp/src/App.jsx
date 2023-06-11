import { useState  , useEffect} from 'react'
import { fetchMovieDataFromApi } from './utils/api'

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import { getApiConfiguration } from './store/homeSlice';
import { useDispatch , useSelector } from 'react-redux';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Home from './pages/home/Home';


//key               bb01f42f29ae734fc9319db1e88c3730
//access token      eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjAxZjQyZjI5YWU3MzRmYzkzMTlkYjFlODhjMzczMCIsInN1YiI6IjY0ODU5ZWFlYzlkYmY5MDBlMzAwMWIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2CF_Y19YyeFUjTfP5rE9VxiN9tAT9MMtYQzU0aCh38


function App() {
  //setting up react router

  const dispatch = useDispatch()
  const {url} = useSelector(state =>
    state.home
  )

  console.log( url )

  useEffect(()=>{
    fetchApiConfig();
  },[])

  //fetching all popular movie data
  const fetchApiConfig=  () =>{
    fetchMovieDataFromApi('/configuration')
    .then((res)=>{
      console.log(res)

      //retreiving movie poster into a url object
      const url = {
        backdrop: res.images.secure_base_url + "original" ,
        poster: res.images.secure_base_url + "original" ,
        profile: res.images.secure_base_url + "original" ,
      }


      //suppling the data to redux store
      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element = {<Home></Home>}/>
      <Route path='/:mediaType/:id'  element = {<Details/>}/>
      <Route path='/search/:query'  element = {<SearchResult/>}/>
      <Route path='/explore/:mediaType'  element = {<Explore/>}/>
      <Route path='*'  element = {<PageNotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
