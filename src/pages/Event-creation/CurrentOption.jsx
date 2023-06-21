import React from 'react'
import AddBg from './AddBg';
import ColorsPallete from './ColorsPallete';
import AddText from './AddText';
import AddBorders from './AddBorders';

const CurrentOption = (props) => {
    switch (props.active) {
        case 1:
          return <AddBg 
                    activeImg={props?.activeImg}
                    currentActiveImg={props?.currentActiveImg}
                />
        case 2:
            return <ColorsPallete
                active={props.active}
                currBoxBgColor={props.currBoxBgColor}
            />
        case 3:
            return <AddText
                currText={props.currText}
            />
        case 4:
            return <AddBorders
                currBorder={props.currBorder}
                currentBorder={props.currentBorder}
            />
          
        default:
          return "No case found";
      }
}

export default CurrentOption