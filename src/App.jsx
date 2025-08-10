// src/App.jsx
import React, { useRef } from "react";
import gab from "./assets/gab.gif";
import sedih from "./assets/sedih.gif";
import dance from "./assets/dance.gif";
import happy from "./assets/hepi.gif";
import two from "./assets/two.gif";
import song from "./assets/cikini.mpeg";

export default function App() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const slides = [
    { text: "scrol ke kanan ..." },
    { text: "Halo vio", gif: gab },
    { text: "Lagi sedih atau", gif: sedih },
    { text: " Lagi bahagia", gif: happy },
    { text: "Semoga lagi bahagia ya ", gif: dance },
    { text: "mari hepi bersama", gif: two },
  ];

  return (
    <div className="w-screen h-screen overflow-x-auto flex snap-x snap-mandatory scroll-smooth">
      {slides.map((slide, i) => (
  <div
    key={i}
    className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center snap-center bg-gray-900 text-white"
  >
    {i === 0 && (
      <>
        <audio ref={audioRef} src={song} />
        <button
          onClick={handlePlay}
          className="mb-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Play Musik 🎵
        </button>
      </>
    )}
    <p className="text-2xl mb-4">{slide.text}</p>
    
    {slide.gif && (
      <img
        src={slide.gif}
        alt={`Slide ${i + 1}`}
        className="w-60 h-60 object-cover rounded-xl"
      />
    )}
  </div>
))}

    </div>
  );
}
