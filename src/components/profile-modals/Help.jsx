import { Button } from 'components/Common/Button/Button'
import React from 'react'
import { crossIcon } from 'svg-icons/icons'

const Help = (props) => {
  return (
    <div className='user_profile fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className="need_help p-9 bg-white">
            <div className='flex items-center'>
                <span className='cursor-pointer' onClick={() => props.handleProfileClose()}>{crossIcon}</span> <span className='ml-4 text-xl'>Need help?</span>
            </div>
            <div className=" mt-9">
                <p className='mb-9'>
                    ask your question below and we will answer as soon as possible.
                </p>
                <div className="help_ flex flex-col px-9">
                    <label className='mb-2 text-xl'>
                        topic:
                    </label>
                    <input 
                        type="password" 
                        className='p-3 rounded-lg mb-3 w-50' 
                        placeholder='Enter password' 
                    />
                    <label className='mb-2 mt-3 text-xl'>
                        your email:
                    </label>
                    <input
                        type="password" 
                        className='p-3 rounded-lg mb-2 w-50' 
                        placeholder='Enter password' 
                    />
                    <label className='mb-2 mt-3 text-xl'>
                        you question:
                    </label>
                    <textarea 
                        type="text" 
                        className='p-3 rounded-lg mb-2 w-full' 
                        placeholder='Write here your comments' 
                    ></textarea>
                </div>
                <div className='flex justify-end px-9'>
                    <Button 
                        style={{backgroundColor :'#69A88D'}}
                        btnText={"Need Help"}
                        className={"text-white"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help