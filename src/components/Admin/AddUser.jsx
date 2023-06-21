import React from 'react'
import { crossIcon } from 'svg-icons/icons'

const AddUser = (props) => {
  if(props.openUserModal){
    return (
        <div style={{zIndex: "999"}} className='add_user fixed z-100 top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className="user_inner p-9 w-80 h-80 bg-white rounded-lg">
                <div className="flex justify-between mt-5">
                    <p className='xl:text-2xl lg:xl md:lg font-semibold mb-7'>Add User</p>
                    <div className='text-end cursor-pointer' onClick={() => props.handleClose()}>{crossIcon}</div>
                </div>
                <p className='xl:text-xl lg:lg md:md mb-4'>Add user email and name</p>
                <label className='my-3 text-xl'>Name</label>
                <input type="text" className='px-3 mb-7' placeholder='Enter Name' />
                <label className="text-xl">Email</label>
                <input type="text" className='px-3' placeholder='Enter Email' />
            </div>
        </div>
      )
  }
}

export default AddUser