// app/snippet/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default async function SnippetPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({ where: { id } });

  if (!snippet) return <h1>Snippet Not Found</h1>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-300 via-slate-400 to-red-500 bg-clip-text text-transparent">
            {snippet.title}
          </h1>
        </Link>
        <div className="flex items-center justify-center gap-7">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
      <pre className="mt-5 italic text-xl font-medium px-2 py-3  bg-red-900 rounded-xl border-3 border-gray-500 border-dotted">
        {snippet.code}
      </pre>
    </div>
  );
}
