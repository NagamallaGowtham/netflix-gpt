import { useDispatch } from "react-redux";
import { API_OPTIONS, FETCH_POPULAR_URL } from "../utils/movieapi";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const allMovies = async () => {
        const data = await fetch(FETCH_POPULAR_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addPopularMovies(response.results));
    }

    useEffect(() => {
        allMovies();
    }, []);
}

export default usePopularMovies