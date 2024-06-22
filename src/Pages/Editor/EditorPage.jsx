import React, { useState } from 'react'
import Client from "../../Components/Client/Client"
import Editor from '../../Components/Editor/Editor';

const EditorPage = () => {

  const [clients, setClients] = useState([
    {
      socketId: 1,
      userName: 'Smit',
    },
    {
      socketId: 2,
      userName: 'Jay',
    },
    {
      socketId: 3,
      userName: 'Raj',
    },
    {
      socketId: 1,
      userName: 'Smit',
    },
    {
      socketId: 2,
      userName: 'Jay',
    },
    {
      socketId: 3,
      userName: 'Raj',
    }
  ]);

  return (
    <>
      <div className="flex flex-wrap text-white flex-row gap-5">
        <div className="">
          <div className="h-[100vh] w-[12.5vw] bg-[#282a36] flex flex-col justify-between p-2">
            <div className="flex flex-col gap-2">
              <div className="logo border-b-[1px] border-[#515f75]">
                <img src="/code-sync.png" width={170} height={170} className='mb-2' />
              </div>

              <h3 className='my-2 text-[18px]'>Connected Users</h3>

              <div className="flex flex-wrap gap-6">
                {
                  clients.map(client => {
                    return (
                      <>
                        <Client key={client.socketId} userName={client.userName} />
                      </>
                    )
                  })
                }
              </div>
            </div>

            <div className="flex flex-col py-4 px-1 gap-2">
              <button className='border-none rounded-md text-[#282a36]  text-[16px] cursor-pointer transition-all bg-[#4aed88]  py-1 hover:bg-[#4aed88b1]'>Copy Room Id</button>
              <button className='rounded-md text-[#282a36]  text-[16px] cursor-pointer transition-all border-2 border-transparent bg-[#f5f5f5]  py-1 hover:bg-[#4aed88]'>Leave</button>
            </div>

          </div>
        </div>
        <div className="pt-2">
          <Editor/>
        </div>
      </div>
    </>
  )
}

export default EditorPage