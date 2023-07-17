import React, { useEffect } from 'react'
import img2 from "../../../assets/Images/Video.png"
import img3 from "../../../assets/Images/Video2.png"
import { useDispatch } from 'react-redux'
import { introduction } from 'redux/slices/eventSlice'

const coverPics = [
    {id: 1, img: img2},
    {id: 2, img: img3},
    {id: 3, img: img2},
    {id: 4, img: img2},
]

const SelectIntro = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(introduction("Dummy introduction..."))
  }, [])
  return (
    <div className='intro_main'>
        <p className='text-xl mb-3'>
            firstly, let’s make it epic! choose the intro for your invitation: 
        </p>
        <div className="bg-white p-6 rounded-lg flex justify-center gap-8">
            <div className='intro_img_wraper overflow-auto'>
                {coverPics.map((pic) => (
                    <div 
                        className={`img_main ${pic.id===props.activeImg?.id ? 'imgActive' :''} mb-2 cursor-pointer overflow-hidden`}
                        onClick={() => props.currentActiveImg(pic.id, pic.img)}
                    >
                        <img src={pic.img} className='img_full' alt="" />
                    </div>
                ))}
            </div>
            <div className="selected overflow-hidden rounded-lg h-full">
                <img src={props.activeImg?.img} className=' h-100 img_full'  alt="" />
            </div>
        </div>
    </div>
  )
}

export default SelectIntro