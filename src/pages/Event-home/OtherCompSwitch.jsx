import React from 'react'
import Location from './all-comps/Location'
import Countdown from './all-comps/Countdown'
import Weather from './all-comps/Weather'
import SocialMedia from './all-comps/SocialMedia'
import Gifts from './all-comps/Gifts'
import Feedback from './all-comps/Feedback'

const OtherCompSwitch = (props) => {
    switch(props.currComp) {
        case 1:
            return ""
        case 2:
            return <Location />
        case 3:
            return <Countdown />
        case 4:
            return <Weather />
        case 5:
            return <SocialMedia />
        case 6:
            return <Gifts />
        case 7:
            return <Feedback />
            
        default: return "no comp selected"
      }
}

export default OtherCompSwitch