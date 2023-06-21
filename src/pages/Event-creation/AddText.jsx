import React from 'react'
import { crossIcon } from 'svg-icons/icons'

const AddText = (props) => {
    const handleChange = (e) => {
        const value = e.target.value
        props.currText(value)
    }
  return (
    <div className='add_text_main p-4'>
        <div className='flex justify-between'>
            <strong>Add Background</strong>
            <span>{crossIcon}</span>
       </div>
       <textarea 
        className='mt-4 p-2 w-full' 
        rows="10" cols="39" 
        placeholder='Enter text here'
        onChange={handleChange}
       ></textarea>
    </div>
  )
}

export default AddText