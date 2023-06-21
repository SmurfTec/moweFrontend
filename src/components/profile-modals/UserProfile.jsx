import React, { useState } from 'react'
import "./userprofile.css"
import { crossIcon, pencilIcon, profileIcon } from 'svg-icons/icons'
import appLogoSmall from "../../assets/Svgs/appLogoSmal.svg"
import { Button } from 'components/Common/Button/Button'

const UserProfile = (props) => {
    const[activeModal, setActiveModal] = useState(1)
  return (
    <div className='user_profile fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className="profile_inner p-9 m-auto rounded-lg bg-white">
            <div className='flex items-center'>
                <span className='cursor-pointer' onClick={() => props.handleProfileClose()}>{crossIcon}</span> <span className='ml-4'>My Profile</span>
            </div>
            <div className="flex justify-center gap-9 mt-5">
                <div className="left pb-9">
                    <div className="profilePic mx-auto bg-white rounded-full flex items-center justify-center">
                        <div className="editIcon rounded-full cursor-pointer flex items-center justify-center">
                            <span>{pencilIcon}</span>
                        </div>
                        <span>{profileIcon}</span>
                    </div>
                    <div className='text-center flex flex-col px-9'>
                        <p className='font-semibold text-xl my-4'>User 1</p>
                        <label className='mb-2 text-xl text-start'>Email</label>
                        <input type="text" className='px-3 mb-3' placeholder='Enter Email' />

                        <label className="text-xl mb-2 text-start">Event date</label>
                        <input type="date" className='px-3' />

                        <label className="text-xl mb-2 mt-3 text-start">invitation active until: </label>
                        <input type="date" className='px-3' placeholder='Enter Email' />
                    </div>
                </div>
                <div className="right flex flex-col items-center">
                    <img src={appLogoSmall} style={{height: "150px"}} alt="" />
                    <div className='mt-7'>
                        <Button 
                            btnText={"Log Off"}
                            className="profile_btns my-5 text-white"
                            style={{backgroundColor: "#69A88D"}}
                        />
                        <Button 
                            btnText={"Help"}
                            className="profile_btns my-5 text-white"
                            style={{backgroundColor: "#69A88D"}}
                            onClick={() => props.handleProfile(4, 3)}
                        />
                        <Button 
                            btnText={"security & password"}
                            className="profile_btns my-5 text-white"
                            style={{backgroundColor: "#69A88D"}}
                            onClick={() => props.handleProfile(4, 2)}
                        />
                        <Button 
                            btnText={"Delete Account"}
                            className="profile_btns my-5 text-white"
                            style={{backgroundColor: "#69A88D"}}
                        />
                    </div>
                    <Button 
                        btnText={"Save Changes"}
                        className="px-9 mt-8 ml-9"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile