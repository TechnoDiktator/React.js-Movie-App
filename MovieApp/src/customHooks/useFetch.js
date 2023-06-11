import { useEffect, useState } from "react";
import { fetchMovieDataFromApi } from "../utils/api";


//this will fetch us the data related to any query
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchMovieDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Server Error!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;