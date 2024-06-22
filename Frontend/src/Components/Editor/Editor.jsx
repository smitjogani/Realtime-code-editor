import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Editorc = () => {

  const [code, setCode] = useState('');

  return (
    <>
      <div className='w-[84vw]'>

        <Editor
          theme="vs-dark"
          height="96vh"
          language='javascript'
          value={code}
          onChange={code => setCode(code)}
        />

      </div>
    </>
  )
}

export default Editorc