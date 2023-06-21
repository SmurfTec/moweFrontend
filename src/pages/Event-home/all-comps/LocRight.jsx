import { CheckBox } from 'components/Common/CheckBox/CheckBox'
import React from 'react'

const LocRight = () => {
  return (
    <div className='w-1/2 ml-9'>
        <div className='w-full flex justify-between'>
            <p>is there a second location?</p>
            <CheckBox />
        </div>
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input 
                type="text" 
                id="simple-search" 
                className="bg-gray-50 my-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Puerta del sol, Madrid" required 
            />
        </div>
        <input 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 my-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Title: Celebración" required 
        />
        <p className='text-lg mt-3'>add a description text to the map:</p>
        <textarea 
            placeholder='Text: Catedral de la Almudena, Madrid, España'
            className='text_area w-full mt-2 p-2' 
            rows="3"
        ></textarea>
        <div className='w-full flex justify-between'>
            <p>ido you offer transport service?</p>
            <CheckBox />
        </div>
        <input 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 my-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Escribe aquí..."  
        />
        <div className='w-full flex justify-between'>
            <p>any special parking indication?</p>
            <CheckBox />
        </div>
        <input 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 my-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Escribe aquí..."  
        />
    </div>
  )
}

export default LocRight