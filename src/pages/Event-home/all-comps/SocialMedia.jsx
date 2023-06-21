import React from 'react'
import logo1 from "../../../assets/Logos/Twitter.svg"
import logo2 from "../../../assets/Logos/Facebook.svg"
import logo3 from "../../../assets/Logos/Insta.svg"
import logo4 from "../../../assets/Logos/InstaDark.svg"

const SocialMedia = () => {
  return (
    <div className='social_media_main flex justify-center items-center'>
        <div className="social bg-gray-900 opacity-90 rounded-lg text-center p-4 py-8">
            <p className='text-xl text-white'>
                use a easte hashtag cousono pbliques fotos en las redas socialss
            </p>
            <h1 className='text-5xl my-9'># Kevin & Laura</h1>
            <div className="flex justify-center items-center gap-5">
                <img src={logo1} className='w-14 h-14' alt="" />
                <img src={logo2} className='w-14 h-14' alt="" />
                <img src={logo3} className='w-14 h-14' alt="" />
                <img src={logo4} className='w-14 h-14' alt="" />
            </div>
        </div>
    </div>
  )
}

export default SocialMedia