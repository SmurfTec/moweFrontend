import React from 'react'
import img1 from "../../../assets/Images/img1.png"

const Countdown = () => {
  return (
    <div className='countdown_main mt-9 w-full h-full'>
        <div className='flex items-center justify-center gap-9 mt-9 pt-5' style={{width: '90%'}}>
            <div className="img_">
                <img src={img1} alt="" />
            </div>
            <div className='flex flex-col gap-9 justify-between'>
                <h2 className='text-5xl'>Solo Faltan...</h2>
                <div className='flex my-7'>
                    <span className='border-l-2 text-white border-gray-600 px-6'>
                        <span className='text-2xl text-left'>100</span> <br /><br />
                        <span className='text-white mt-9'>days</span>
                    </span>
                    <span className='border-l-2 text-white border-gray-600 px-6'>
                        <span className='text-2xl text-left'>100</span> <br /><br />
                        <span className='text-white'>hours</span>
                    </span>
                    <span className='border-l-2 text-white border-gray-600 px-6'>
                        <span className='text-2xl text-left'>100</span> <br /><br />
                        <span className='text-white'>minutes</span>
                    </span>
                    <span className='border-l-2 text-white border-gray-600 px-6'>
                        <span className='text-2xl text-left'>100</span> <br /><br />
                        <span className='text-white'>seconds</span>
                    </span>
                </div>
                <h2 className='text-5xl'>iGuarda la fetcha!</h2>
            </div>
        </div>
    </div>
  )
}

export default Countdown