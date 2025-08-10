import React from 'react'
import { useSelector } from 'react-redux'
import { LANG } from '../utils/constants'

const GptSearchBox = () => {
    const langKey = useSelector(store => store.lang.langSelected)
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center z-20 relative'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input className='p-4 m-4 col-span-9 bg-[#cabbbb] rounded-lg' type="text" name='search' placeholder={LANG[langKey]?.placeholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{LANG[langKey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBox