import React from 'react';
import Editor from '@monaco-editor/react';

const MonacoEditorComponent = () => {
  const handleEditorChange = (value) => {
    console.log("Editor content:", value);
  };

  return (
    <Editor
      height="500px"
      defaultLanguage="javascript"
      defaultValue="// Start writing your code here"
      onChange={handleEditorChange}
    />
  );
};

export default MonacoEditorComponent;
