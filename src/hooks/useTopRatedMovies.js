import { useDispatch } from "react-redux";
import { API_OPTIONS, FETCH_TOP_RATED_URL } from "../utils/movieapi";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const allMovies = async () => {
        const data = await fetch(FETCH_TOP_RATED_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addTopRatedMovies(response.results));
    }

    useEffect(() => {
        allMovies();
    }, []);
}

export default useTopRatedMovies