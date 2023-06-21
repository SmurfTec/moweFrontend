import React from 'react'
import sunImg from "../../../assets/Images/sun.png"

const Weather = () => {
  return (
    <div className='weather_main flex justify-center items-center gap-5'>
        <div className="left bg-white rounded-lg flex jusitfy-center items-center px-5">
            <p className='text-white text-center text-lg leading-relaxed'>
                No hay necesidad de ir de negro y aburrido, esto es una fiesta y 
                queremos verte elegante pero colorido!
            </p>    
        </div>
        <div className="right">
            <div className="weather_update rounded-lg px-8 py-9">
                <h1 className='text-4xl'>SABADO</h1>
                <div className="border-b border-gray-300"></div>
                <div className="flex justify-between items-center">
                    <p className='text-xl text-gray-800 py-2'>10 DE JUNEO</p>
                    <p className='text-xl text-gray-800 py-2'>11:30 AM</p>
                </div>
                <div className="border-b border-gray-300"></div>
                <div className="flex justify-between items-center py-9">
                    <div className="img mt-5">
                        <img src={sunImg} style={{width: '140px', height: "140px"}} alt="" />
                    </div>
                    <div className="text">
                        <h1 className='text-7xl text-gray-700 mt-9'>25 C</h1>
                        <h2 className='text-3xl text-gray-700'>BARCELONA</h2>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-blue-400 mt-8'>SW 14-20 KM/H</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather