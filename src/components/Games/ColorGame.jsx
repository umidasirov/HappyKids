import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

export default function ColorGame() {
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    pickRandomColor();

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pickRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setMessage("");
    setShowConfetti(false);
    setConfettiOpacity(0);
  };

  const handleColorClick = (color) => {
    if (color === targetColor) {
      setMessage("✅ Zo‘r! To‘g‘ri topding!");
      setShowConfetti(true);

      // Confetti asta-asta paydo bo‘lishi uchun opacity ni oshiramiz
      setConfettiOpacity(1);

      // 3 soniyadan so‘ng confetti asta-asta yo‘q bo‘lsin
      setTimeout(() => {
        setConfettiOpacity(0);
      }, 2500);

      // 3.5 soniyadan keyin yangi rang tanlab, confetti ni o'chiramiz
      setTimeout(() => {
        setShowConfetti(false);
        pickRandomColor();
      }, 3500);
    } else {
      setMessage("❌ Qayta urin!");
      setShowConfetti(false);
      setConfettiOpacity(0);
    }
  };

  return (
    <div className="text-center p-4 position-relative">
      <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {targetColor.toUpperCase()} rangini top!
      </h2>
      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>
      <p style={{ fontWeight: "600", fontSize: "1.25rem" }}>{message}</p>

      {/* Confetti bayram bezaklari silliq paydo bo‘lishi va yo‘qolishi uchun */}
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            opacity: confettiOpacity,
            transition: "opacity 0.7s ease-in-out",
            zIndex: 9999,
          }}
        >
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={200}
            recycle={false}
            colors={colors}
          />
        </div>
      )}
    </div>
  );
}
