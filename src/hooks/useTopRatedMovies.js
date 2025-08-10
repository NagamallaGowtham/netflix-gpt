import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, FETCH_TOP_RATED_URL } from "../utils/movieapi";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const allMovies = async () => {
        const data = await fetch(FETCH_TOP_RATED_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addTopRatedMovies(response.results));
    }

    useEffect(() => {
        !topRatedMovies && allMovies();
    }, []);
}

export default useTopRatedMovies