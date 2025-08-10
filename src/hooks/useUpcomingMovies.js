import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, FETCH_UPCOMING_URL } from "../utils/movieapi";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const allMovies = async () => {
        const data = await fetch(FETCH_UPCOMING_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addUpcomingMovies(response.results));
    }

    useEffect(() => {
        !upcomingMovies && allMovies();
    }, []);
}

export default useUpcomingMovies