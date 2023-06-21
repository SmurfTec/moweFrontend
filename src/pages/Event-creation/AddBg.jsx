import React from 'react'
import { crossIcon } from 'svg-icons/icons'
// import img1 from "../../assets/Images/Video1.png"
import img2 from "../../assets/Images/Video2.png"
import img3 from "../../assets/Images/Video.png"

const coverPics = [
    {id: 1, img: img2},
    {id: 2, img: img3},
    {id: 3, img: img2},
    {id: 4, img: img2},
    {id: 5, img: img2},
]

const AddBg = (props) => {
  return (
    <div className='add_bg_main bg-white p-4'>
       <div className='flex justify-between'>
            <strong>Add Background</strong>
            <span>{crossIcon}</span>
       </div>
       <div className='mt-4 img_wraper overflow-auto'>
        {coverPics.map((pic) => (
            <div 
                className={`img_main ${pic.id===props.activeImg ? 'imgActive' :''} mb-2 cursor-pointer overflow-hidden`}
                onClick={() => props.currentActiveImg(pic.id)}
            >
                <img src={pic.img} className='img_full' alt="" />
            </div>
        ))}
       </div>
    </div>
  )
}

export default AddBg