import axios from "axios";
/*curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/11?api_key=bb01f42f29ae734fc9319db1e88c3730'
     
     curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjAxZjQyZjI5YWU3MzRmYzkzMTlkYjFlODhjMzczMCIsInN1YiI6IjY0ODU5ZWFlYzlkYmY5MDBlMzAwMWIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2CF_Y19YyeFUjTfP5rE9VxiN9tAT9MMtYQzU0aCh38' \
     --header 'accept: application/json'
     
     
     */

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjAxZjQyZjI5YWU3MzRmYzkzMTlkYjFlODhjMzczMCIsInN1YiI6IjY0ODU5ZWFlYzlkYmY5MDBlMzAwMWIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2CF_Y19YyeFUjTfP5rE9VxiN9tAT9MMtYQzU0aCh38";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};



export const fetchMovieDataFromApi = async (url , params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    
    } catch (error) {
        console.log(error);
        return error
    }
}








































