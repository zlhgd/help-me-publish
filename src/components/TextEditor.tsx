"use client";

import { ChangeEvent } from "react";

interface TextEditorProps {
  text: string;
  onTextChange: (text: string) => void;
}

export default function TextEditor({ text, onTextChange }: TextEditorProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
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
          📋 Copier
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
