import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function ScriptEditor({ onRun }) {
  const [code, setCode] = useState("# Write your script here\n");

  return (
    <div className="flex flex-col h-full">
      <Editor
        height="60vh"
        defaultLanguage="bash"
        value={code}
        onChange={setCode}
      />
      <button
        className="mt-2 bg-blue-500 text-white p-2 rounded"
        onClick={() => onRun(code)}
      >
        Run
      </button>
    </div>
  );
}
