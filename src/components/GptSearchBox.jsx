import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LANG } from '../utils/constants'
import ai from '../utils/geminiAPI'
import { addGptNames, addGPtResults } from '../utils/gptSlice'
import { API_OPTIONS } from '../utils/movieapi'
// import openai from '../utils/openapi'

const GptSearchBox = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const [searchError, setSearchError] = useState("");
    const langKey = useSelector(store => store.lang?.langSelected)
    const searchInput = useRef()
    const dispatch = useDispatch()

    const searchTMDBMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&page=1", API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const customisedPrompt =  "Act as a Movie Recommendation system and suggest some movies for the query : " + searchInput.current?.value + ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Bahibali, RRR, Mayabazar, Shiva, Satya";

    const handleGptSearch = async () => {
        setIsDisabled(true);
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: customisedPrompt,
        });

        setSearchError("");
        setIsDisabled(false);

        if (!response) setSearchError("Something went Wrong! Search it again");
        
        dispatch(addGptNames(response.text.split(", ")))

        const promiseArray = response.text.split(", ")?.map(movie => searchTMDBMovies(movie))

        const tmdbResults = await Promise.all(promiseArray);
        
        dispatch(addGPtResults(tmdbResults))
    }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center z-20 relative'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={e => e.preventDefault()}>
            <input className='p-4 m-4 col-span-9 bg-[#cabbbb] rounded-lg' type="text" name='search' ref={searchInput} placeholder={LANG[langKey]?.placeholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer disabled:bg-red-400' disabled={isDisabled} onClick={handleGptSearch}>{LANG[langKey]?.search}</button>
        </form>
        {searchError && <h2 className='text-white font-semibold'>{searchError}</h2>}
    </div>
  )
}

export default GptSearchBox