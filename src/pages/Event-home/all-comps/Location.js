import React from 'react'
import LocLeft from './LocLeft'
import LocRight from './LocRight'

const Location = () => {
  return (
    <div className='main_box py-5 px-16 bg-white w-85 h-auto rounded-xl m-auto'>
        <div className="flex justify-between">
            <LocLeft />
            <LocRight />
        </div>
    </div>
  )
}

export default Location