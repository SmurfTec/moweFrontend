import React from 'react'

const DesignCreated = (props) => {
    console.log(props.currBorder)
  return (
    <div 
        className='design_created_main p-6 flex items-center justify-center overflow-auto'
        style={{
            backgroundColor: `${props.boxColor}`,
            border: `5px solid ${props.currBorder.border}`,
        }}
    >
        <p className='m-0 p-0 text-white xl:text-3xl lg:text-2xl md:text-xl sm:text-xl xl:leading-relaxed text-center leading-relaxed font-300'>{props.curText}</p>
    </div>
  )
}

export default DesignCreated