import { useState, useEffect, useMemo } from "react";
import Confetti from "react-confetti";
import {Link} from "react-router-dom"

const allColors = [
  "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF9F1C",
  "#6A4C93", "#FF3F8B", "#00B8A9", "#F6416C", "#FFBF00",
  "#00A6ED", "#F46036", "#2E86AB", "#EDE574", "#00D084",
  "#FF6F91", "#845EC2", "#D65DB1", "#FF9671", "#0081CF"
];

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function colorDistance(c1, c2) {
  return Math.sqrt(
    (c1[0] - c2[0]) ** 2 +
    (c1[1] - c2[1]) ** 2 +
    (c1[2] - c2[2]) ** 2
  );
}

function filterSimilarColors(colors, threshold = 100) {
  const filtered = [];
  colors.forEach((color) => {
    const rgb = hexToRgb(color);
    const tooClose = filtered.some((fc) => colorDistance(rgb, hexToRgb(fc)) < threshold);
    if (!tooClose) filtered.push(color);
  });
  return filtered;
}

export default function ColorGame() {
  const colors = useMemo(() => filterSimilarColors(allColors, 20), []);

  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Для достижений
  const [correctStreak, setCorrectStreak] = useState(0);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    pickRandomColor();

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [colors]);

  const pickRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setMessage("");
    setShowConfetti(false);
    setConfettiOpacity(0);
  };

  const checkAchievements = (streak) => {
    const newAchievements = [...achievements];

    if (streak === 1 && !newAchievements.includes("Birinchi muvaffaqiyat")) {
      newAchievements.push("Birinchi muvaffaqiyat");
    }
    if (streak === 3 && !newAchievements.includes("3 seriya muvofaqiyat")) {
      newAchievements.push("3 ta seruyadan muvofaqiyat");
    }
    if (streak === 5 && !newAchievements.includes("5 seriyadan muvofaqiyat")) {
      newAchievements.push("5 seriyadan muvofaqiyat");
    }
    if (streak === 10 && !newAchievements.includes("10 seriyadan muvofaqiyat")) {
      newAchievements.push("10 seriyadan muvofaqiyat");
    }

    if (newAchievements.length !== achievements.length) {
      setAchievements(newAchievements);
    }
  };

  const handleColorClick = (color) => {
    if (color === targetColor) {
      setMessage("✅ Zo'r! To'g'ri topding!");
      setShowConfetti(true);
      setConfettiOpacity(1);

      // Обновляем серию побед и достижения
      const newStreak = correctStreak + 1;
      setCorrectStreak(newStreak);
      checkAchievements(newStreak);

      setTimeout(() => {
        setConfettiOpacity(0);
      }, 2500);

      setTimeout(() => {
        setShowConfetti(false);
        pickRandomColor();
      }, 3500);
    } else {
      setMessage("❌ Qayta urin!");
      setShowConfetti(false);
      setConfettiOpacity(0);
      setCorrectStreak(0); // Сброс серии при ошибке
    }
  };

  const getColorName = (hex) => {
    const colorNames = {
      "#FF6B6B": "Qizil",
      "#FFD93D": "Sariq",
      "#6BCB77": "Yashil",
      "#4D96FF": "Ko‘k",
      "#FF9F1C": "To‘q sariq",
      "#6A4C93": "Binafsha",
      "#FF3F8B": "Yorqin qizil",
      "#00B8A9": "Ko‘k-yashil",
      "#F6416C": "Qizg‘ish pushti",
      "#FFBF00": "Oltin sariq",
      "#00A6ED": "Ochiq ko‘k",
      "#F46036": "Jigarrang to‘q oranj",
      "#2E86AB": "Chuval ko‘k",
      "#EDE574": "Sariq-yashil",
      "#00D084": "Yashil",
      "#FF6F91": "Pushti",
      "#845EC2": "Lavanda",
      "#D65DB1": "Fuksiya",
      "#FF9671": "Och oranj",
      "#0081CF": "To‘q ko‘k"
    };
    return colorNames[hex] || hex;
  };

  return (
    <div
      className="text-center p-4 position-relative color-game"
      style={{
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        minHeight: "80vh",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >

      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
          <li className="breadcrumb-item"><Link to="/games">O'yinlar</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Ranglarni topish o'yini</li>
        </ol>
      </nav>

      <h2 
        className="mb-6"
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#333",
          textShadow: "2px 2px 5px #aaa",
          marginBottom: "40px"
        }}
      >
        {getColorName(targetColor)} rangini top!
      </h2>

      <div
        className="d-flex justify-content-center flex-wrap gap-4 mb-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
                data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorClick(color)}
            aria-label={`Rang: ${getColorName(color)}`}
            style={{
              backgroundColor: color,
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              border: "3px solid white",
              boxShadow: `0 4px 10px ${color}AA, 0 0 15px ${color}77`,
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          ></button>
        ))}
      </div>

      <p
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          minHeight: "2rem",
          color: message.startsWith("✅") ? "green" : "red",
          textShadow: "1px 1px 3px #bbb",
        }}
      >
        {message}
      </p>

      <div style={{ marginTop: 20, textAlign: "left", maxWidth: 300, margin: "20px auto 0" }}>
        <h3 style={{ fontSize: "1.2rem", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>
          Yutuqlar
        </h3>
        {achievements.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#666" }}>Xozircha yutuqlar yoq</p>
        ) : (
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {achievements.map((ach, idx) => (
              <li key={idx} style={{ marginBottom: 6, fontWeight: "600" }}>
                🏆 {ach}
              </li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: 10 }}>
          Xozirgi yutuqlar seriyasi: <strong>{correctStreak}</strong>
        </p>
      </div>

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
            numberOfPieces={250}
            recycle={false}
            colors={colors}
          />
        </div>
      )}
    </div>
  );
}
