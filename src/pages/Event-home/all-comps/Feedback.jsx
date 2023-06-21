import { Button } from 'components/Common/Button/Button'
import { CheckBox } from 'components/Common/CheckBox/CheckBox'
import React from 'react'

const Feedback = () => {
  return (
    <div className='w-full h-100 flex flex-col items-center mt-9'>
        <h1 className='text-5xl mb-9'>iNos encantara contar contigo!</h1>
        <div className='feedback rounded-lg p-5'>
            <textarea 
                placeholder='Text: Catedral de la Almudena, Madrid, España'
                className='text_area w-full mt-2 p-2' 
                rows="4"
            ></textarea>
            <div className="flex items-center gap-4 my-3">
                <label className='text-white text-xl'>Que canción no puede faltar? </label>
                <input 
                    type="text" 
                    id="simple-search" 
                    className="bg-white input_feedback" 
                    placeholder="Title: Celebración" 
                />
            </div>
            <div className="flex items-center gap-4 my-3">
                <label className='text-white text-xl'>
                    Tienes alguna alergia alimentaria? 
                </label>
                <input 
                    type="text" 
                    id="simple-search" 
                    className="bg-white input_feedback" 
                    placeholder="Title: Celebración" 
                />
            </div>
            <div className="flex justify-end items-center gap-4">
                <label className='text-white text-xl'>
                    Vas a utilizar nuestro transporte?
                </label>
                <CheckBox 
                    label="Si"
                />
                <CheckBox 
                    label="No"
                />
            </div>
            <p className='text-white text-2xl my-3'>Asistentes: </p>
            <div className="flex justify-between">
                <div className=''>
                    <div className='flex gap-8 mb-3'>
                        <input 
                            type="text" 
                            id="simple-search" 
                            className="bg-white text-center input_feedback" 
                            placeholder="Nº Adultos" 
                            style={{width: '150px'}}
                        />
                        <input 
                            type="text" 
                            id="simple-search" 
                            className="bg-white text-center input_feedback" 
                            placeholder="Nº Niños" 
                            style={{width: '150px'}}
                        />
                    </div>
                    <p className='text-white'>Lamentablemente declino la invitación</p>
                </div>
                <Button 
                    className={"pl-9 pr-5 text-white bg-gray-900 rounded-lg"}
                >
                    Confirmo asistencia!
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Feedback