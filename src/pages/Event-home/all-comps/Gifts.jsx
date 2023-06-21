import React from 'react'

const Gifts = () => {
  return (
    <div className='gifts_main w-full h-100'>
        <div className="inner ml-9 pl-9 mt-9">
            <h1 className='text-5xl ml-9 pl-9'>Y Si quieres hacernos algun detaile...</h1>
            <div className="payment rounded-lg flex flex-col justify-center items-center mt-8">
                <div className="text-center my-3 px-9">
                    <p className='mb-2 text-white'>Link a Neustra Lista de boda</p>
                    <input 
                        type="text" 
                        id="simple-search" 
                        className="input_gift bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="www.example.com"     
                    />
                </div>
                <div className="text-center my-3 px-9">
                    <p className='mb-2 text-white'>Link a Neustra Lista de boda</p>
                    <input 
                        type="text" 
                        id="simple-search" 
                        className="input_gift bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="www.example.com"     
                    />
                </div>  
                <div className="flex justify-between gap-5 mt-5">
                    <div>
                        <p className=' text-white text-2xl'>Bizum</p>
                        <input 
                            type="text" 
                            id="simple-search" 
                            className="w-50 bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="www.example.com"     
                        />
                    </div>
                    <div>
                        <p className=' text-white text-2xl'>Paypal/ma (Visa)</p>
                        <input 
                            type="text" 
                            id="simple-search" 
                            className="w-50 bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white " 
                            placeholder="www.example.com"     
                        />
                    </div>
                </div>              
            </div>
        </div>
    </div>
  )
}

export default Gifts