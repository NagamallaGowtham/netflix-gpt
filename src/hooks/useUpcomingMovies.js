import { useDispatch } from "react-redux";
import { API_OPTIONS, FETCH_UPCOMING_URL } from "../utils/movieapi";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const allMovies = async () => {
        const data = await fetch(FETCH_UPCOMING_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addUpcomingMovies(response.results));
    }

    useEffect(() => {
        allMovies();
    }, []);
}

export default useUpcomingMovies