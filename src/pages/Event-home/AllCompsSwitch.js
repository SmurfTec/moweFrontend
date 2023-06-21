import Location from "./all-comps/Location"
import Main from "./all-comps/Main"

const AllCompsSwitch = (props) => {
  switch(props.currComp) {
    case 1:
        return <Main />
    case 2:
        return <Location />
    
    default: return "no comp selected"
  }
}

export default AllCompsSwitch