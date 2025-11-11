import React from "react";

export default function Console({ output }) {
  return (
    <div className="bg-black text-green-400 p-2 h-40 overflow-auto font-mono">
      {output || "Console output will appear here"}
    </div>
  );
}
