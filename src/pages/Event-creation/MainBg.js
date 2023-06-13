import React from 'react'
import "./mainbg.css"
import appLogo from "../../assets/Svgs/AppLogo.svg"

const MainBg = () => {
  return (
    <div className='event_creation_main w-100 h-100'>
      <div className='app-logo'>
        <img src={appLogo} className='img_wrap' alt="" />
      </div>
    </div>
  )
}

export default MainBg