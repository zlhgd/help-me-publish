"use client";

import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import TextEditor from "@/components/TextEditor";
import FacebookPreview from "@/components/FacebookPreview";
import InstagramPreview from "@/components/InstagramPreview";
import LinkedInPreview from "@/components/LinkedInPreview";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            📱 Help Me Publish
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Créez et prévisualisez vos publications pour les réseaux sociaux
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Input */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ImageUploader images={images} onImagesChange={setImages} />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <TextEditor text={text} onTextChange={setText} />
            </div>
          </div>

          {/* Right column - Previews */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              👀 Aperçus en temps réel
            </h2>

            {/* Facebook Preview */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 font-semibold">Facebook</span>
              </div>
              <FacebookPreview images={images} text={text} />
            </div>

            {/* Instagram Preview */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                  Instagram
                </span>
              </div>
              <InstagramPreview images={images} text={text} />
            </div>

            {/* LinkedIn Preview */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-700 font-semibold">LinkedIn</span>
              </div>
              <LinkedInPreview images={images} text={text} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          Help Me Publish - Un outil pour les community managers
        </div>
      </footer>
    </div>
  );
}
