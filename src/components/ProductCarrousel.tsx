"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
};

export default function ProductCarousel() {
  const products: Product[] = [
    { id: 1, title: "Pelouse & Jardin" },
    { id: 2, title: "Automotive" },
    { id: 3, title: "Camera et Photo" },
    { id: 4, title: "Cashew Butter" },
    { id: 5, title: "Offres de foudres" },
    { id: 6, title: "Le plus aimés" },
    { id: 7, title: "Vacances" },
    { id: 8, title: "Outlet" },
    { id: 9, title: "Beauté" },
    { id: 10, title: "Mode" },
    { id: 11, title: "Maison" },
  ];

  const visibleCount = 6; // desktop
  const [index, setIndex] = useState(0);
  // roudre le pb de build avec windows
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])


  const next = () => {
    setIndex((prev) =>
      prev + visibleCount >= products.length ? 0 : prev + 1
    );
  };

  const previous = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - visibleCount : prev - 1
    );
  };

  return (
    <div className="relative mt-10 px-4 lg:px-10">
      
      {/* bouton gauche (desktop) */}
      <button
        onClick={previous} className="hidden md:flex absolute dark:text-black left-0 top-1/2 lg:left-16 -translate-y-1/2
        bg-white shadow ring ring-gray-200 p-2 rounded-md z-10">
        <ChevronLeft size={28} />
      </button>

      {/* contenu */}
      <div className=" flex lg:mx-20 gap-3 overflow-x-auto md:overflow-hidden  scrollbar-hide ">
        {(width < 768 ? products: products.slice(index, index + visibleCount)).map((product) => (
          <div key={product.id}
            className=" whitespace-nowrap dark:text-black px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-lg font-semibold cursor-pointer transition"           >
            {product.title}
          </div>
        ))}
      </div>

      {/* bouton droit (desktop) */}
      <button onClick={next} className="hidden md:flex dark:text-black absolute right-0 top-5 lg:right-120 xl:right-16 -translate-y-1/2
        bg-white shadow ring ring-gray-200 p-2 rounded-md z-10" >
        <ChevronRight size={28} />
      </button>
    </div>          
  );
}
