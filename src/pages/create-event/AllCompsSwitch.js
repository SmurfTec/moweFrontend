import React from 'react'
import Start from './all-comps/Start'
import SelectIntro from './all-comps/SelectIntro'
import ImgUpload from './all-comps/ImgUpload'
import AddInfo from './all-comps/AddInfo'
import { useNavigate } from 'react-router-dom'

const AllCompsSwitch = (props) => {
  const navigate = useNavigate()
  switch(props.currComp){
    case 1:
        return <Start 
            changeCurrComp={props.changeCurrComp}
        />
    case 2:
        return <SelectIntro 
            activeImg={props.activeImg}
            currentActiveImg={props.currentActiveImg}
        />
    case 3:
      return <ImgUpload />
    case 4:
      return <AddInfo />
    case 5:
        return navigate('/event-home')
    
    default: return "no component selected"
  }
}

export default AllCompsSwitch