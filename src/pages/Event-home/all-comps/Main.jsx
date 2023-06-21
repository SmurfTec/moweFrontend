import React from 'react'

const Main = () => {
  return (
    <div className='main_box flex flex-col p-16 justify-center bg-white w-85 h-70 rounded-xl m-auto'>
        <p>Choose the welcome names</p>
        <input type="text" id="myInput" placeholder='Enter title' className="my-2 px-2 rounded-md py-2 w-85 border rounded" />
        <div className="flex gap-3 items-center">
            <p>Font :</p>
            <select id="countries" className="input_select bg-white text-sm rounded-lg">
                <option value="">Font Family</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <select id="countries" className="input_select bg-white text-sm rounded-lg">
                <option >Size</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <select id="countries" className="input_select bg-white text-sm rounded-lg">
                <option >Color</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
        <p className='mt-9'>Choose custom URL</p>
        <input type="text" id="myInput" placeholder='Enter title' className="my-2 px-2 rounded-md py-2 w-85 border rounded" />
        <p>Notice: this field will be locked after payment</p>
    </div>
  )
}

export default Main