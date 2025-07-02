"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";
const New = () => {
  return (
    <div>
      <Editor
        height="40vh"
        language="javascript"
        defaultValue="// Write your code here"
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default New;
