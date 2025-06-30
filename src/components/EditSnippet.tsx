"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import {saveSnippet} from "@/actions"
const EditSnippet = ({snippet}:{snippet:Snippet}) => {
  const [language, setlanguage] = useState("javascript");
  const [code,setcode]=useState(snippet.code);
  
  const changeHandler = (val:string="")=>{
    setcode(val)
  }
  const saveSnippetAction = saveSnippet.bind(null,snippet.id,code)

  return (
    <div className="flex flex-col justify-center gap-3">
        <form  className="flex items-center justify-between mb-3" action={saveSnippetAction}>
            <h1 className="font-bold italic text-4xl bg-gradient-to-r from-red-400 via-yellow-500 to-violet-600  text-transparent bg-clip-text">Edit your Code</h1>
            <Button variant={"default"} className="mb-2" type="submit">Save</Button>
        </form>
      <Editor
        height="40vh"
        language={language}
        defaultValue={code}
        theme="vs-dark"
        onChange={changeHandler}
      />
      <Select onValueChange={(value)=>setlanguage(value)}>
        <SelectTrigger className="w-[180px] mt-5 font-semibold">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="javascript">Javascript</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EditSnippet;
