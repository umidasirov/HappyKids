import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

// Faqat asosiy va o'zbekcha ranglar
const colorList = [
  { hex: "#FF0000", name: "Qizil" },
  { hex: "#00FF00", name: "Yashil" },
  { hex: "#0000FF", name: "Ko'k" },
  { hex: "#FFFF00", name: "Sariq" },
  { hex: "#FFA500", name: "Sabzi rang" },
  { hex: "#800080", name: "Binafsha" },
  { hex: "#FFC0CB", name: "Pushti" },
  { hex: "#000000", name: "Qora" },
  { hex: "#fff", name: "Oq" },
];

export default function ColorGame() {
  const [targetColor, setTargetColor] = useState(null);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
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
  }, []);

  const pickRandomColor = () => {
    const random = colorList[Math.floor(Math.random() * colorList.length)];
    setTargetColor(random);
    setMessage("");
    setShowConfetti(false);
  };

  const checkAchievements = (streak) => {
    const newAchievements = [...achievements];
    if (streak === 1 && !newAchievements.includes("Birinchi muvaffaqiyat")) {
      newAchievements.push("Birinchi muvaffaqiyat");
    }
    if (streak === 3 && !newAchievements.includes("3 seriyadan muvaffaqiyat")) {
      newAchievements.push("3 seriyadan muvaffaqiyat");
    }
    if (streak === 5 && !newAchievements.includes("5 seriyadan muvaffaqiyat")) {
      newAchievements.push("5 seriyadan muvaffaqiyat");
    }
    if (streak === 10 && !newAchievements.includes("10 seriyadan muvaffaqiyat")) {
      newAchievements.push("10 seriyadan muvaffaqiyat");
    }
    if (newAchievements.length !== achievements.length) {
      setAchievements(newAchievements);
    }
  };

  const handleColorClick = (color) => {
    if (color.hex === targetColor.hex) {
      setMessage("✅ Zo'r! To'g'ri topding!");
      setShowConfetti(true);
      const newStreak = correctStreak + 1;
      setCorrectStreak(newStreak);
      checkAchievements(newStreak);
      setTimeout(() => setShowConfetti(false), 2500);
      setTimeout(() => pickRandomColor(), 3000);
    } else {
      setMessage("❌ Qayta urin!");
      setShowConfetti(false);
      setCorrectStreak(0);
    }
  };

  return (
    <div
      className="text-center p-4 position-relative color-game"
      style={{
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        minHeight: "80vh",
        maxWidth: 600,
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
        {targetColor ? `${targetColor.name} rangini top!` : "Rang tanlanmoqda..."}
      </h2>
      <div
        className="d-flex justify-content-center flex-wrap mb-4"
        style={{ maxWidth: "200px", margin: "0 auto", gap: "20px" }}
      >
        {Array.from({ length: Math.ceil(colorList.length / 2) }).map((_, rowIdx) => (
          <div key={rowIdx} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {colorList.slice(rowIdx * 2, rowIdx * 2 + 2).map((color) => (
              <button
                key={color.hex}
                onClick={() => handleColorClick(color)}
                aria-label={`Rang: ${color.name}`}
                style={{
                  backgroundColor: color.hex,
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: `3px solid ${color.hex !== "#fff" ? "#fff" : "#000"}`,
                  boxShadow: `0 4px 10px ${color.hex}AA, 0 0 15px ${color.hex}77`,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              ></button>
            ))}
          </div>
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
          <p style={{ fontStyle: "italic", color: "#666" }}>Xozircha yutuqlar yo'q</p>
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
            zIndex: 9999,
          }}
        >
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={200}
            recycle={false}
            colors={colorList.map((c) => c.hex)}
          />
        </div>
      )}
    </div>
  );
}
