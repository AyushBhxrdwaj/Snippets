"use client"
import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as actions from "@/actions"
const createSnippet = () => {
  const [formStateData,req]=useActionState(actions.newSnippet,{message:""});

  return (
    <form className="" action={req}>
      <div className="flex flex-col gap-3">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && <div className="p-2 mt-2 bg-red-400 border-2 border-gray-500 rounded-lg">{formStateData.message}</div>}
      <Button className="mt-3">New</Button>
    </form>
  );
};

export default createSnippet;
