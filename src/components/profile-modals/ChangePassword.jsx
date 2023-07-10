import React from 'react'
import "./userprofile.css"
import { crossIcon, pencilIcon, profileIcon } from 'svg-icons/icons'
import appLogoSmall from "../../assets/Svgs/appLogoSmal.svg"
import { Button } from 'components/Common/Button/Button'
import { useState } from 'react'
import { userChangePassword } from 'redux/slices/userSlices'

const ChangePassword = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const[passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        cpassword: ""
    })
    const handleChange = (e) => {
        const{name, value} = e.target;

        setPasswords({
            ...passwords,
            [name] : value
        })
    }

    const changePassword = async() => {
        if(passwords.newPassword !== passwords.cpassword)
            return alert("Password and Confirm Password did'nt matched.")
        const body = {
            oldPassword: passwords.oldPassword, 
            newPassword: passwords.newPassword
        }
        const response = await userChangePassword(body)
        const{data} = response
        console.log(response)
        if(data?.status === 200){
            alert("Password updated successfully.")
            window.location.reload()
        }else{
            alert(data?.message)
        }
    }
  return (
    <div className='user_profile fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className="change_pass p-9 bg-white">
            <div className='flex items-center'>
                <span className='cursor-pointer' onClick={() => props.handleProfileClose()}>{crossIcon}</span> <span className='ml-4'>security & password</span>
            </div>
            <div className='flex justify-end'>
                <img src={appLogoSmall} style={{height: "150px"}} alt="" />
            </div>
            <div className="">
                <div className="left mx-auto pb-9">
                    <div className="profilePic bg-white rounded-full flex items-center justify-center">
                        <div className="editIcon rounded-full cursor-pointer flex items-center justify-center">
                            <span>{pencilIcon}</span>
                        </div>
                        <span>{profileIcon}</span>
                    </div>
                    <p className='fixed_name text-xl font-semibold'>{user?.email}</p>
                    <div className='inputs_ flex flex-col items-center px-9 pt-9'>
                        <div className="flex flex-col w-full">
                            <label className='mb-2 text-xl text-start mt-9'>
                                contraseña anterior
                            </label>
                            <input 
                                type="password" 
                                className='px-3 py-2 rounded-lg mb-3 w-50' 
                                placeholder='Enter password'
                                name='oldPassword'
                                value={passwords.oldPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label className='mb-2 text-xl text-start'>
                                Contraseña nueva
                            </label>
                            <input 
                                type="password" 
                                className='px-3 py-2 rounded-lg mb-3 w-50' 
                                placeholder='Enter password'
                                name='newPassword'
                                value={passwords.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="flex flex-col w-full">
                            <label className='mb-2 text-xl text-start'>
                                Confirmar contraseña nueva
                            </label>
                            <input 
                                type="password" 
                                className='px-3 py-2 rounded-lg mb-3 w-50' 
                                placeholder='Enter password'
                                name='cpassword'
                                value={passwords.cpassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-9 mt-5'>
                    <Button 
                        btnText={"Guardar cambios"}
                        className={"mr-5"}
                        onClick={changePassword}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword