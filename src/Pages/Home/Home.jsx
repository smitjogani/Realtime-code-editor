import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();

    const uid = uuidv4();
    setRoomId(uid);

    toast.success("New Room Id Created Successfully");
  }

  const joinRoom = () => {
    if (!roomId) {
      toast.error("Room Id is require");
      return;
    }
    else if (!userName) {
      toast.error("Username is require");
      return;
    }

    //redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName
      }
    });
  }

  const handleInputEnter = (e) => {
    if (e.code == "Enter") {
      joinRoom();
    }
  }

  return (
    <>
      <div className="flex items-center justify-center text-white h-[100vh]">
        <div className="lg-form flex bg-[#282a36] flex-col p-[16px] rounded-lg">
          <img src="/code-sync.png" width={170} height={170} />
          <h4 className='mb-[10px] mt-4'>Past invitation ROOM ID</h4>
          <div className="flex flex-col gap-4 pt-1 text-black">
            <input type="text" className=' p-1 pl-2 bg-[#f5f5f5] rounded-md' placeholder='ROOM ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleInputEnter} required />
            <input type="text" className='p-1 pl-2 rounded-md bg-[#f5f5f5] ' onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='User Name' onKeyUp={handleInputEnter} required />
            <button className='border-none rounded-md text-[#282a36]  text-[16px] cursor-pointer transition-all bg-[#4aed88] ml-auto w-[80px] py-1 hover:bg-[#4aed88b1]' onClick={joinRoom}>Join</button>
            <span className='text-[#f5f5f5] flex justify-center'>
              If you don't invite then create &nbsp;
              <a className="text-[#4aed88] hover:text-[#4aed88b1] cursor-pointer" href='' onClick={createNewRoom}>new room</a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;