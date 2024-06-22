import React from 'react'
import Avatar from 'react-avatar'

const Client = ({ userName }) => {
  return (
    <>

      <div className='text-white flex flex-col'>
        <Avatar name={userName} size={40} round="10px" />
        <span className='flex justify-center'>{userName}</span>
      </div>

    </>
  )
}

export default Client