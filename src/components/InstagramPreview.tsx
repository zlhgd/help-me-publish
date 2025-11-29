"use client";

import { useState } from "react";

interface InstagramPreviewProps {
  images: string[];
  text: string;
}

export default function InstagramPreview({
  images,
  text,
}: InstagramPreviewProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
            CM
          </div>
          <span className="font-semibold text-sm text-gray-900">
            community_manager
          </span>
        </div>
        <button className="text-gray-900">•••</button>
      </div>

      {/* Image carousel */}
      {images.length > 0 ? (
        <div className="relative aspect-square bg-black">
          <img
            src={images[currentImage]}
            alt={`Preview ${currentImage + 1}`}
            className="w-full h-full object-contain"
          />
          {images.length > 1 && (
            <>
              {currentImage > 0 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-gray-800"
                >
                  ‹
                </button>
              )}
              {currentImage < images.length - 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center text-gray-800"
                >
                  ›
                </button>
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      index === currentImage ? "bg-blue-500" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
          Votre aperçu Instagram apparaîtra ici
        </div>
      )}

      {/* Actions */}
      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4">
            <span className="text-2xl cursor-pointer">♡</span>
            <span className="text-2xl cursor-pointer">💬</span>
            <span className="text-2xl cursor-pointer">✈️</span>
          </div>
          <span className="text-2xl cursor-pointer">🔖</span>
        </div>

        {/* Caption */}
        {text && (
          <div className="text-sm text-gray-900">
            <span className="font-semibold">community_manager</span>{" "}
            <span className="whitespace-pre-wrap">{text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
