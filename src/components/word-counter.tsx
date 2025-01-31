"use client"; // Enables client-side rendering for this component
import React, { useState, ChangeEvent } from "react"; // Import useState and ChangeEvent from React
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Import custom Card components
import { Textarea } from "@/components/ui/textarea"; // Import custom Textarea component
import { Button } from "@/components/ui/button"; // Import custom Button component

export default function WordCounter() {
  // State to manage the input text
  const [text, setText] = useState<string>("");

  // Function to handle text input changes
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Function to clear the input text
  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

  // JSX return statement rendering the Word Counter UI
  return (
    <div className="   flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 to-indigo-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center justify-center flex flex-col text-blue-900">
        <CardTitle className="text-blue-800 underline  text-4xl">Text Analysis</CardTitle>

          <b><CardDescription className="text-blue-950 text-1xl">
            Enter text and see the word and character count.
          </CardDescription></b>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
            <span id="word-count" className="text-blue-950 text-2xl">{wordCount}</span> words,{" "}
<span id="char-count" className="text-blue-950 text-2xl">{charCount}</span> characters

            </div>
            {/* Button to clear the input text */}
            <Button onClick={clearText} className="bg-blue-500 text-white hover:bg-blue-700">Clear</Button>

          </div>
        </CardContent>
      </Card>
      <br></br>  <div className="text-center text-blue-900 font-bold">
  <h1 className="text-1xl">Developed By : Hareem Jaweid</h1>
  <h1 className="text-1xl"></h1>
</div>
    </div>
  );
}