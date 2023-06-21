import React from 'react'
import mark from "../../assets/Svgs/mark.svg"
import appLogo from "../../assets/Svgs/AppLogo.svg"
import { Button } from 'components/Common/Button/Button'
import confetti from "../../assets/Images/confetti.png"
import { useNavigate } from 'react-router-dom'

const PaySuccess = (props) => {
    const navigate = useNavigate()
  if(props.openSModal){
    return (
    <div className='pay-success_modal flex items-center'>
        <div className="imgwraper mx-auto">
            <img src={confetti} className='w-100 h-100' alt="" />
            <div className="success-inner absolute top-0 left-0 right-0 bottom-0 z-100 m-auto flex justify-center items-center flex-col">
                <img src={mark} className='w-40 h-40' alt="" />
                <p className='my-4'>Gracias por confiar en </p>
                <img src={appLogo} className='my-0 h-40' alt="" />
                <p className='text-center'>
                Y ahora vamos con los el panel de <br /> gestión de invitados!
                </p>
                <p className='text-sm my-5'>
                Mira tu correo electrónico. Allí encontrarás el link a tu invitación!
                </p>
    
                <div className="flex justify-center gap-9 mt-4">
                    <Button 
                        btnText="Home"
                        className="px-9 text-2xl"
                        onClick={() => props.handleSClose()}
                    />
                    <Button 
                        btnText="Añadir Invitados"
                        className="px-9 text-2xl text-white"
                        style={{backgroundColor: "#69A88D"}}
                        onClick={() => navigate("/adminTable")}
                    />
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default PaySuccess