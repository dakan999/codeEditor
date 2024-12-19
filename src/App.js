import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './style.css';

const sendCodeToServer = async (language, code) => {
  try {
    const response = await fetch('http://localhost:5000/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language, code }),
    });

    const result = await response.json();
    console.log('Server response:', result); 
    return result;
  } catch (error) {
    console.error('Error sending code to server:', error);
    throw error;
  }
};

const App = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const handleRunClick = async () => {
    console.log('Running code...');
    try {
      const result = await sendCodeToServer(language, code);
      console.log('Result received:', result);  // Логируем результат
      setResult(result); // Отображаем результат на странице
    } catch (error) {
      console.error('Error:', error);
      setResult({ status: 'error', error: 'Failed to send code to server' });
    }
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Online Code Editor</h1>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="language-select" style={{ marginRight: '10px' }}>
          Select Language:
        </label>
        <select
          id="language-select"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      <Editor
        height="500px"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
      />

      <button
        onClick={handleRunClick}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Run
      </button>

      <div style={{ marginTop: '20px' }}>
        {result && result.status === 'success' ? (
          <pre style={{ background: '#e0f7fa', padding: '10px' }}>
            {result.output} {/* Показываем вывод */}
          </pre>
        ) : result && result.status === 'error' ? (
          <pre style={{ background: '#ffebee', padding: '10px' }}>
            {result.error}
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default App;
