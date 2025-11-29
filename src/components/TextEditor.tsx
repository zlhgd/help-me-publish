"use client";

import { ChangeEvent, useState } from "react";

interface TextEditorProps {
  text: string;
  onTextChange: (text: string) => void;
}

export default function TextEditor({ text, onTextChange }: TextEditorProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("success");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  const getCopyButtonText = () => {
    switch (copyStatus) {
      case "success":
        return "✅ Copié!";
      case "error":
        return "❌ Erreur";
      default:
        return "📋 Copier";
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">✏️ Texte de la publication</h2>
        <button
          onClick={copyToClipboard}
          disabled={!text}
          className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {getCopyButtonText()}
        </button>
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Écrivez votre publication ici..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {text.length} caractères
      </div>
    </div>
  );
}
