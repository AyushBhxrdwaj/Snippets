"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
const New = () => {
  const [code, setcode] = useState("//write your code")
  return (
    <div>
      <Editor
        className="mt-3"
        height="40vh"
        language="javascript"
        defaultValue={code}
        onChange={(value="")=>{setcode(value)}}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
      <input type="hidden" name="code" value={code} />
    </div>
  );
};

export default New;
