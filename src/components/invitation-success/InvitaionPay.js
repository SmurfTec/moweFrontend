import React, { useState } from 'react'
import "./invitation.css"
import { crossIcon, yuoroSign } from 'svg-icons/icons'
import { Button } from 'components/Common/Button/Button'
import PaySuccess from './PaySuccess'

const InvitaionPay = (props) => {
    const[openSModal, setOpenSModal] = useState(false)
    const handleSClose = () => {
        props.handleClose()
        setOpenSModal(false)
    }
  if(props.modalOpen) {
    return (
        <>
            <div className='invitaion_modal flex items-center'>
                <div 
                    className='fixed top-20 left-80 z-50 cursor-pointer'
                    onClick={() => props.handleClose(false)}
                >
                    {crossIcon}
                </div>
                <div className="inner bg-white rounded-lg h-80 m-auto flex flex-col justify-center">
                    <h1 className='text-5xl text-center mb-3'>¡Tu invitación con todo!</h1>
                    <p className='text-center mb-4'>Por solo:</p>
                    <div className="rounded-xl money_div mx-auto bg-#F1E8D1-500 flex items-center">
                        <span style={{marginLeft: '-8px'}}>{yuoroSign}</span>
                        <span className='xl:text-7xl lg:text-6xl font-semibold ml-9' style={{color: "#FF9900"}}>99€</span>
                    </div>
                    <p className='font-semibold mt-4 mb-2'>¡Atención!</p>
                    <p>Después de este paso se creará la URL elegida, la cual no se podrá volver a modificar.</p>
                    <input 
                        type="text" 
                        id="simple-search" 
                        className="bg-white py-1 px-5 w-full my-4 input_feedback" 
                        placeholder="mowe.com/custom-url" 
                    />
                    <p className='my-3 text-lg'>
                    La fecha del evento también quedará guardada. para modificarla tendrás que ponerte en contacto con nosotros.
                    </p>
                    <div className='date_div mt-3 py-1 px-9 text-center'>
                        <p className='sm'>November 15th, 2023</p>
                    </div>
                    <div className="flex justify-between items-center mt-9">
                        <p>Podrás elegir el método de pago en la pasarela</p>
                        <Button 
                            btnText="Pagar"
                            style={{backgroundColor: "#69A88D"}}
                            className={"text-white px-9"}
                            onClick={() => setOpenSModal(true)}
                        />
                    </div>
                </div>
            </div>
            {openSModal ? 
                <PaySuccess 
                    openSModal={openSModal}
                    handleSClose={handleSClose}
                />:''
            }
        </>
      )
  }
}

export default InvitaionPay