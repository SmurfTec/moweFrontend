import React, { useState } from 'react'
import "./mainbg.css"
import Options from './Options'
import CurrentOption from './CurrentOption'
import DesignCreated from './DesignCreated'
import { Button } from 'components/Common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Login } from 'components/Login/Login'

const MainBg = () => {
  const navigate = useNavigate()
  const[modalOpen, setModalOpen] = useState(false)
  const[active, setActive] = useState(1)
  const[activeImg, setActiveImg] = useState(1)
  const[boxBgColor, setBoxBgColor] = useState(1)
  const[curText, setCurrText] = useState("")
  const[currBorder, setCurrBorder] = useState({})

  const currentActive = (id) => {
    setActive(id)
  }
  const currentActiveImg = (id) => {
    setActiveImg(id)
  }
  const currBoxBgColor = (id) => {
    console.log(id)
    setBoxBgColor(id)
  }
  const currText = (text) => {
    setCurrText(text)
  }
  const currentBorder = (id, border) => {
    setCurrBorder({id,border})
  }

  const saveUserDesign = () => {
    setModalOpen(true)
  }

  return (
    <div className='event_creation_main w-100 h-100'>
      <Options 
        active={active}
        currentActive={currentActive}
      />
      
      <CurrentOption 
        active={active}
        activeImg={activeImg}
        currentActiveImg={currentActiveImg}
        currBoxBgColor={currBoxBgColor}
        currText={currText}
        currBorder={currBorder}
        currentBorder={currentBorder}
      />

      <DesignCreated 
        currBorder={currBorder}
        curText={curText}
        boxColor={boxBgColor}
      />

      <div className='save_btn'>
        <Button 
          className="pl-9 pr-6 w-40 text-xl text-white" 
          style={{backgroundColor: '#69A88D'}}
          onClick={saveUserDesign}
        >
          Save
        </Button>
      </div>

      {modalOpen ? <Login modalOpen={modalOpen} setModalOpen={setModalOpen} /> : ''}
    </div>
  )
}

export default MainBg