"use client";

interface LinkedInPreviewProps {
  images: string[];
  text: string;
}

export default function LinkedInPreview({
  images,
  text,
}: LinkedInPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-3 flex items-start gap-3">
        <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
          CM
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-sm text-gray-900">
            Community Manager
          </div>
          <div className="text-xs text-gray-500">
            Responsable des réseaux sociaux
          </div>
          <div className="text-xs text-gray-400">À l&apos;instant • 🌐</div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>

      {/* Text content */}
      {text && (
        <div className="px-3 pb-3">
          <p className="text-sm text-gray-900 whitespace-pre-wrap">{text}</p>
        </div>
      )}

      {/* Images */}
      {images.length > 0 && (
        <div
          className={`grid ${
            images.length === 1
              ? "grid-cols-1"
              : images.length === 2
              ? "grid-cols-2"
              : "grid-cols-2"
          } gap-0.5`}
        >
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative ${
                images.length === 3 && index === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    +{images.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {images.length === 0 && !text && (
        <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
          Votre aperçu LinkedIn apparaîtra ici
        </div>
      )}

      {/* Engagement stats */}
      <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-200">
        👍 ❤️ 💡
      </div>

      {/* Actions */}
      <div className="p-2 flex justify-around">
        <button className="flex items-center gap-1.5 text-gray-600 text-sm hover:bg-gray-100 px-3 py-2 rounded-md">
          👍 J&apos;aime
        </button>
        <button className="flex items-center gap-1.5 text-gray-600 text-sm hover:bg-gray-100 px-3 py-2 rounded-md">
          💬 Commenter
        </button>
        <button className="flex items-center gap-1.5 text-gray-600 text-sm hover:bg-gray-100 px-3 py-2 rounded-md">
          🔄 Republier
        </button>
        <button className="flex items-center gap-1.5 text-gray-600 text-sm hover:bg-gray-100 px-3 py-2 rounded-md">
          ✉️ Envoyer
        </button>
      </div>
    </div>
  );
}
