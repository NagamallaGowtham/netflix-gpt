import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, FETCH_NOW_PLAYING_URL } from "../utils/movieapi";
import { addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const playingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const allMovies = async () => {
        const data = await fetch(FETCH_NOW_PLAYING_URL, API_OPTIONS);
        const response = await data.json();
        
        dispatch(addPlayingMovies(response.results));
    }

    useEffect(() => {
        !playingMovies && allMovies();
    }, []);
}

export default useNowPlayingMovies