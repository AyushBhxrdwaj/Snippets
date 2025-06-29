import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const createSnippet = () => {
  async function newSnippet(formData: FormData) {
    "use server"; //use server directive
    const title = formData.get("title") as String;
    const code= formData.get("code") as String;

    const snippet = await prisma.snippet.create({
        data:{
            title,
            code
        }
    });
    console.log("snippet",snippet)
    redirect("/");
  }
  return (
    <form className="" action={newSnippet}>
      <div className="flex flex-col gap-3">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <Button className="mt-3">New</Button>
    </form>
  );
};

export default createSnippet;
