import { useDispatch } from "react-redux";
import { API_OPTIONS, FETCH_URL } from "../utils/movieapi";
import { addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = async () => {
        const data = await fetch(FETCH_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addPlayingMovies(response.results));
    }

    useEffect(() => {
        nowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies