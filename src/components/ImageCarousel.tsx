"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i.postimg.cc/SNsxps05/f1.png",
  "https://i.postimg.cc/0Qcw5BV0/f2.png",
  "https://i.postimg.cc/ydQDCSNf/f1.png",
  "https://i.postimg.cc/1tb1h9px/f1.png",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>





      <span className="underline font-bold">Exercice text</span>

      {/* Image principale */}
      <div className="p-7 shadow rounded flex items-center h-[250px] justify-center mb-8 gap-4">
        <button onClick={prev}>
          <ChevronLeft size={28} />
        </button>

        <img
          src={images[index]}
          alt="carousel"
          className="h-full object-contain transition"
        />

        <button onClick={next}>
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Miniatures */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`h-20 w-20 cursor-pointer rounded shadow transition
              hover:scale-110
              ${index === i ? "ring-2 ring-[#bb3252]" : ""}`}
            alt="thumbnail"
          />
        ))}
      </div>
    </div>
  );
}
