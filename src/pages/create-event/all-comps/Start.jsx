import { Button } from 'components/Common/Button/Button'
import React from 'react'
import handIcon from "../../../assets/Svgs/Hand.svg"

const Start = (props) => {
  return (
    <div className='start_main mx-auto bg-white w-full h-full px-9 py-9 rounded-lg flex flex-col justify-center items-center'>
        <img src={handIcon} alt="" />
        <h2 className='xl:text-2xl lg:text-xl text-center px-9 mt-9 font-semibold my-3'>
            Welcome to your wedding invitation designer!
        </h2>
        <p className='my-4 text-2xl leading-relaxed px-9 text-center'>
            if you’re ready, let’s design the perfect invitation for the Big Day! 
        </p>
        <Button 
            className={"pl-9 pr-6 w-40 h-16 text-xl text-white shadow-md ring-blue-500"}
            style={{backgroundColor: "#69A88D", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.14)"}}
            onClick={() => props.changeCurrComp(2)}
        >
            Start
        </Button>
    </div>
  )
}

export default Start