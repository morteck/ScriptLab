import React, { useState } from "react";
import ScriptEditor from "./components/Editor";
import Console from "./components/Console";

export default function App() {
  const [output, setOutput] = useState("");

  const runScript = async (code) => {
    const response = await fetch("http://localhost:8000/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: "bash", code }),
    });
    const data = await response.json();
    setOutput(data.stdout || data.error || "");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">ScriptLab</h1>
      <ScriptEditor onRun={runScript} />
      <Console output={output} />
    </div>
  );
}
