import React, { useState } from 'react'
import "./eventcreate.css"
import appLogo from "../../assets/Svgs/AppLogo.svg"
import AllCompsSwitch from './AllCompsSwitch'
import img3 from "../../assets/Images/Video2.png"
import { Button } from 'components/Common/Button/Button'

const EventCreate = () => {
  const[currComp, setCurrComp] = useState(1)
  const[activeImg, setActiveImg] = useState({id:1, img: img3})

  const changeCurrComp = (id) => {
    setCurrComp(id)
  }
  const currentActiveImg = (id, img) => {
    setActiveImg({id, img})
  }

  return (
    <div className='create_event_main w-full h-100'>
        <a href="/">
            <img src={appLogo} className="app_logo_img pl-3 ml-3" alt="" />
        </a>

        <div className='event_bg_main mt-9 justify-center items-center bg-white m-auto rounded-lg h-auto'>
            <AllCompsSwitch 
                currComp={currComp}
                changeCurrComp={changeCurrComp}
                activeImg={activeImg}
                currentActiveImg={currentActiveImg}
            />
            <div className="flex justify-between items-center mt-4">
                {currComp>1 && 
                <>
                    <Button 
                        className={"pl-6 pr-3 bg-white"}
                        onClick={() => setCurrComp(currComp-1)}
                    >
                        Previous Step
                    </Button>
                    <Button 
                        className={"pl-6 pr-3 text-white"} 
                        style={{backgroundColor: '#69A88D'}}
                        onClick={() => setCurrComp(currComp+1)}
                    >
                        Next Step
                    </Button>
                </>
                }
            </div>
        </div>

    </div>
  )
}

export default EventCreate