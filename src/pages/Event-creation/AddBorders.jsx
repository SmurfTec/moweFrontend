import React, { useRef } from 'react'
import { crossIcon } from 'svg-icons/icons'
import img2 from "../../assets/Images/Video2.png"
import img3 from "../../assets/Images/Video.png"

const coverPics = [
    {id: 1, img: img2, border: "#69A88D"},
    {id: 2, img: img3, border: "red"},
    {id: 3, img: img2, border: "black"},
    {id: 4, img: img2, border: "blue"},
    {id: 5, img: img2, border: "yellow"},
    {id: 6, img: img2, border: "green"},
]

const AddBorders = (props) => {
    const selectedRef = useRef(null)
    const handleBorders = (id, borderColor) => {
        console.log(borderColor)
        props.currentBorder(id, borderColor)
    }
  return (
    <div className='add_bg_main bg-white p-4'>
       <div className='flex justify-between'>
            <strong>Add Border Decorations</strong>
            <span>{crossIcon}</span>
       </div>
       <div className='mt-4 img_wraper overflow-auto'>
        {coverPics.map((pic) => (
            <div 
                ref={selectedRef}
                className={`borders_ ${pic.id===props.currBorder.id ? 'borderActive' :''} mb-2 cursor-pointer overflow-hidden`}
                style={{border: `2px solid ${pic.border}`}}
                onClick={() => handleBorders(pic.id, pic.border)}
            >
                <img src={pic.img} className='img_full' alt="" />
            </div>
        ))}
       </div>
    </div>
  )
}

export default AddBorders