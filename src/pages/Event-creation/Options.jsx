import React from 'react'
import { options } from 'svg-icons/icons'

const Options = (props) => {
  return (
    <div className='options_main flex flex-row items-center justify-around'>
        {options?.map(option => (
            <div 
                className={`rounded-full w-16 h-16 flex justify-center items-center cursor-pointer`}
                style={props?.active===option.id ? {backgroundColor: 'white'} : {backgroundColor: '#1B1B1B'}}
                onClick={() => props.currentActive(option.id)}
            >
                <span>
                    {props?.active===option.id ? option.iconActive : option.icon}
                </span>
            </div>
        ))}
    </div>
  )
}

export default Options