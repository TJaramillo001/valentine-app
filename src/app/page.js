"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);

  const messages = [
    "Porfiiii",
    "Think about it 🥺",
    "Mira q te hice una página web",
    "Tan grosera",
    "Me caes mal :(",
    "Bueno, prohibid este botón 😌"
  ];

  const yesSize = 1 + noCount * 0.3;
  const noDisabled = noCount >= 6;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-center px-4">
      <img
        src="/minion.png"
        alt="Minion with heart"
        className="w-48 mb-6"
      />

      <h1 className="text-4xl font-bold text-white-700 mb-4">
        Will you be my Valentine?
      </h1>

      {noCount > 0 && (
        <p className="mb-6 text-lg text-white-700">
          {messages[Math.min(noCount - 1, messages.length - 1)]}
        </p>
      )}

      <div className="relative flex items-center justify-center gap-6">
        <button
          onClick={() => router.push("/yes")}
          style={{ transform: `scale(${yesSize})` }}
          className="transition-transform duration-300 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Yes ❤️
        </button>

        <button
          onClick={() => setNoCount(noCount + 1)}
          disabled={noDisabled}
          className={`px-6 py-3 rounded-xl font-semibold ${
            noDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          No
        </button>
      </div>
    </main>
  );
}
