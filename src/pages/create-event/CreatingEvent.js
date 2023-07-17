import { API_BASE } from 'Configs/secrets'
import axios from 'axios'
import { Spinner } from 'components/Common/LoadingSpinner/Spinner'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreatingEvent = () => {
    const navigate = useNavigate()
  const eventDetails = useSelector(state => state.event.eventDetails)
  
  const savedata = async (body) => {
    const token = JSON.parse(localStorage.getItem('USER_CREDENTIALS'))
    try {
        const response = await axios.post(`${API_BASE}event/create-event`, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        })
        const {data} = response
        if(data?.status===200){
            console.log(data)
            navigate('/event-home/'+data?.data?._id)
        }
        return response
    } catch (error) {
        return error
    }
  }

  useEffect(() => {
    savedata(eventDetails)
  }, [])
  return (
    <div className='flex items-center justify-center'>
        <Spinner className="animation" />
    </div>
  )
}

export default CreatingEvent