import React from 'react'

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center text-white h-[100vh]"> 
        <div className="lg-form flex bg-[#282a36] flex-col p-[10px] rounded-lg">
          <img src="/code-sync.png" width={170} height={170} />
          <h4 className='mb-[10px] mt-4'>Past invitation ROOM ID</h4>
          <div className="flex flex-col gap-4 pt-1">
            <input type="text" className=' p-1 bg-[#f5f5f5] rounded-md' placeholder='ROOM ID' required />
            <input type="text" className='p-1 rounded-md bg-[#f5f5f5] ' placeholder='User Name' required />
            <button className='border-none rounded-md text-[#282a36]  text-[16px] cursor-pointer transition-all bg-[#4aed88] ml-auto w-[80px] py-1 hover:bg-[#4aed88b1]'>Join</button>
            <span className='text-[#f5f5f5] flex justify-center'>
              If you don't invite then create &nbsp;
              <a className="text-[#4aed88] hover:text-[#4aed88b1] cursor-pointer" link="">new room</a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home