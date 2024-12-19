

import React, { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    const response = await fetch('http://localhost:5000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'javascript', 
        code: code,
      }),
    });

    const data = await response.json();
    setOutput(data.codeOutput);
  };

  return (
    <div>
      <h1>Online Code Editor</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <button onClick={runCode}>Run</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
