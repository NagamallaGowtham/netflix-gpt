import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, FETCH_POPULAR_URL } from "../utils/movieapi";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const popularMovies = useSelector(store => store.movies.popularMovies)

    const allMovies = async () => {
        const data = await fetch(FETCH_POPULAR_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addPopularMovies(response.results));
    }

    useEffect(() => {
        !popularMovies && allMovies();
    }, []);
}

export default usePopularMovies