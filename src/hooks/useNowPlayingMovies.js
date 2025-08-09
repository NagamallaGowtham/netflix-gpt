import { useDispatch } from "react-redux";
import { API_OPTIONS, FETCH_NOW_PLAYING_URL } from "../utils/movieapi";
import { addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const allMovies = async () => {
        const data = await fetch(FETCH_NOW_PLAYING_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addPlayingMovies(response.results));
    }

    useEffect(() => {
        allMovies();
    }, []);
}

export default useNowPlayingMovies