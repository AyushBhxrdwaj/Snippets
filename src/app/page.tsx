import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const Page = async () => {
  const snippets = await prisma.snippet.findMany();

  if(!snippets) return <h1>No snippet Found</h1>

  return (
    <div className="">
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">Snippets</span>
        <Link href="/snippet/new">
          <Button className="cursor-pointer">New</Button>
        </Link>
      </div>

      <div className="mt-4 space-y-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex items-center justify-between p-3 border-4 border-gray-500 border-double rounded-xl"
          >
            <h2 className="text-lg font-medium">{snippet.title}</h2>
            <Link href={`/snippet/${snippet.id}`}>
              <Button className="cursor-pointer">View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
