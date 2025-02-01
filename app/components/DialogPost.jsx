"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";

export default function DialogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [textSuccess, setTextSuccess] = useState("");
  const headers = { "Content-Type": "application/json" };
  const textToDisplay = document.getElementById("textToDisplay");

  const finishForm = (text, color) => {
    textToDisplay.classList.add(color);
    setTextSuccess(text);
    setTitle("");
    setBody("");
    setTimeout(() => {
      setTextSuccess("");
    }, 3000);
  };

  const addPost = async () => {
    const data = JSON.stringify({
      title: title,
      body: body,
    });
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers,
      data,
    });

    const dataResponse = await response.json();
    if (dataResponse !== null) {
      finishForm("Success!", "text-green-300");
    } else {
      finishForm("Failed!", "text-red-300");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-sm border-[1px] border-gray-200 h-12 flex gap-x-2 items-center justify-start px-4 text-[16px]"
          variant="default"
        >
          Add Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Post</DialogTitle>
          <DialogDescription>You can now add a new post</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              value={title}
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Body
            </Label>
            <Input
              id="username"
              value={body}
              className="col-span-3"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <p className=" text-sm flex self-center" id="textToDisplay">
              {textSuccess}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="submit" onClick={(e) => addPost()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
