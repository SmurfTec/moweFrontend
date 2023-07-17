import React from 'react'

const HomeDesignCreated = ({eventInfo}) => {
  // const eventDetails = useSelector(state => state.event.eventDetails)
  return (
    <div className='home_design_main'>
        <h1 
            className='text-8xl text-white text-center pt-3' 
            style={{fontFamily: `Parisienne`}}
        >
            {eventInfo?.title}
        </h1>
        <h2 className='text-center text-white text-4xl mt-5'>Date: {eventInfo?.date}</h2>
    </div>
  )
}

export default HomeDesignCreated