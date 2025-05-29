import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const generateNumbers = (max) => Array.from({ length: max }, (_, i) => i + 1);
const sounds = {
  1: "Bir!",
  2: "Ikki!",
  3: "Uch!",
  4: "To‘rt!",
  5: "Besh!",
  6: "Olti!",
  7: "Yetti!",
  8: "Sakkiz!",
  9: "To‘qqiz!",
  10: "O‘n!",
  11: "O‘n bir!",
  12: "O‘n ikki!",
  13: "O‘n uch!",
  14: "O‘n to‘rt!",
  15: "O‘n besh!",
  16: "O‘n olti!",
  17: "O‘n yetti!",
  18: "O‘n sakkiz!",
  19: "O‘n to‘qqiz!",
  20: "Yigirma!",
  21: "Yigirma bir!",
  22: "Yigirma ikki!",
  23: "Yigirma uch!",
  24: "Yigirma to‘rt!",
  25: "Yigirma besh!",
  26: "Yigirma olti!",
  27: "Yigirma yetti!",
  28: "Yigirma sakkiz!",
  29: "Yigirma to‘qqiz!",
  30: "O‘ttiz!",
  31: "O‘ttiz bir!",
  32: "O‘ttiz ikki!",
  33: "O‘ttiz uch!",
  34: "O‘ttiz to‘rt!",
  35: "O‘ttiz besh!",
  36: "O‘ttiz olti!",
  37: "O‘ttiz yetti!",
  38: "O‘ttiz sakkiz!",
  39: "O‘ttiz to‘qqiz!",
  40: "Qirq!",
  41: "Qirq bir!",
  42: "Qirq ikki!",
  43: "Qirq uch!",
  44: "Qirq to‘rt!",
  45: "Qirq besh!",
  46: "Qirq olti!",
  47: "Qirq yetti!",
  48: "Qirq sakkiz!",
  49: "Qirq to‘qqiz!",
  50: "Ellik!",
  51: "Ellik bir!",
  52: "Ellik ikki!",
  53: "Ellik uch!",
  54: "Ellik to‘rt!",
  55: "Ellik besh!",
  56: "Ellik olti!",
  57: "Ellik yetti!",
  58: "Ellik sakkiz!",
  59: "Ellik to‘qqiz!",
  60: "Oltmish!",
  61: "Oltmish bir!",
  62: "Oltmish ikki!",
  63: "Oltmish uch!",
  64: "Oltmish to‘rt!",
  65: "Oltmish besh!",
  66: "Oltmish olti!",
  67: "Oltmish yetti!",
  68: "Oltmish sakkiz!",
  69: "Oltmish to‘qqiz!",
  70: "Yetmish!",
  71: "Yetmish bir!",
  72: "Yetmish ikki!",
  73: "Yetmish uch!",
  74: "Yetmish to‘rt!",
  75: "Yetmish besh!",
  76: "Yetmish olti!",
  77: "Yetmish yetti!",
  78: "Yetmish sakkiz!",
  79: "Yetmish to‘qqiz!",
  80: "Sakson!",
  81: "Sakson bir!",
  82: "Sakson ikki!",
  83: "Sakson uch!",
  84: "Sakson to‘rt!",
  85: "Sakson besh!",
  86: "Sakson olti!",
  87: "Sakson yetti!",
  88: "Sakson sakkiz!",
  89: "Sakson to‘qqiz!",
  90: "To‘qson!",
  91: "To‘qson bir!",
  92: "To‘qson ikki!",
  93: "To‘qson uch!",
  94: "To‘qson to‘rt!",
  95: "To‘qson besh!",
  96: "To‘qson olti!",
  97: "To‘qson yetti!",
  98: "To‘qson sakkiz!",
  99: "To‘qson to‘qqiz!",
  100: "Yuz!",
  101: "Yuz bir!",
  102: "Yuz ikki!",
  103: "Yuz uch!",
  104: "Yuz to‘rt!",
  105: "Yuz besh!",
  106: "Yuz olti!",
  107: "Yuz yetti!",
  108: "Yuz sakkiz!",
  109: "Yuz to‘qqiz!",
  110: "Yuz o‘n!",
  111: "Yuz o‘n bir!",
  112: "Yuz o‘n ikki!",
  113: "Yuz o‘n uch!",
  114: "Yuz o‘n to‘rt!",
  115: "Yuz o‘n besh!",
  116: "Yuz o‘n olti!",
  117: "Yuz o‘n yetti!",
  118: "Yuz o‘n sakkiz!",
  119: "Yuz o‘n to‘qqiz!",
  120: "Yuz yigirma!",
  121: "Yuz yigirma bir!",
  122: "Yuz yigirma ikki!",
  123: "Yuz yigirma uch!",
  124: "Yuz yigirma to‘rt!",
  125: "Yuz yigirma besh!",
  126: "Yuz yigirma olti!",
  127: "Yuz yigirma yetti!",
  128: "Yuz yigirma sakkiz!",
  129: "Yuz yigirma to‘qqiz!",
  130: "Yuz o‘ttiz!",
  131: "Yuz o‘ttiz bir!",
  132: "Yuz o‘ttiz ikki!",
  133: "Yuz o‘ttiz uch!",
  134: "Yuz o‘ttiz to‘rt!",
  135: "Yuz o‘ttiz besh!",
  136: "Yuz o‘ttiz olti!",
  137: "Yuz o‘ttiz yetti!",
  138: "Yuz o‘ttiz sakkiz!",
  139: "Yuz o‘ttiz to‘qqiz!",
  140: "Yuz qirq!",
  141: "Yuz qirq bir!",
  142: "Yuz qirq ikki!",
  143: "Yuz qirq uch!",
  144: "Yuz qirq to‘rt!",
  145: "Yuz qirq besh!",
  146: "Yuz qirq olti!",
  147: "Yuz qirq yetti!",
  148: "Yuz qirq sakkiz!",
  149: "Yuz qirq to‘qqiz!",
  150: "Yuz ellik!",
};
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const NumberCountingGame = () => {
  const [level, setLevel] = useState(10);
  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [message, setMessage] = useState("");
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setShuffledNumbers(shuffle(generateNumbers(level)));
    setNextNumber(1);
    setAchievements([]);
    setMessage("");
  }, [level]);

  const handleClick = (num) => {
    if (num === nextNumber) {
      const word = sounds[num] || `${num}`;
      setMessage(word);
      setAchievements((prev) => [...prev, num]);
      setNextNumber((prev) => prev + 1);

      if (num === level) {
        setTimeout(() => {
          setMessage("🎉 Barakalla! Yangi bosqichga o'tamiz!");
          setTimeout(() => {
            setLevel((prev) => Math.min(prev + 10, 150));
          }, 2000);
        }, 1000);
      }
    } else {
      setMessage("❗️ Noto‘g‘ri. Qayta urinib ko‘ring!");
    }
  };

  return (
    <div className="container text-center py-5 h-100 rounded">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Asosiy</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/games">O'yinlar</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Raqm ketma-ketligi
          </li>
        </ol>
      </nav>
      <h2 className="mb-4 text-primary fw-bold mt-4">
        {level <= 150
          ? `1 dan ${level} gacha sanang!`
          : `Tabriklaymiz! Maksimumga yetdingiz!`}
      </h2>

      <div className="row justify-content-center mb-3">
        {shuffledNumbers.map((num) => (
          <div key={num} className="col-3 col-md-1 m-2">
            <button
              className="btn btn-lg btn-warning fw-bold w-100"
              onClick={() => handleClick(num)}
              disabled={achievements.includes(num)}
            >
              {num}
            </button>
          </div>
        ))}
      </div>

      {message && (
        <div className="alert alert-info fw-bold fs-4 animate__animated animate__bounceIn">
          {message}
        </div>
      )}

      <div className="mt-4">
        <h4 className="text-success">🏆 Yutuqlar:</h4>
        <div className="d-flex flex-wrap justify-content-center">
          {achievements.map((num) => (
            <span
              key={num}
              className="badge bg-success text-white fs-5 m-1 p-2 rounded-pill"
            >
              {sounds[num] || num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberCountingGame;
