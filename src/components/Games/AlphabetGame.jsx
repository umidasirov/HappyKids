import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const alphabets = {
  uz: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z".split(","),
  en: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(","),
  // ru: "А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ы,Э,Ю,Я".split(
  //   ","
  // ),
};

const colors = [
  "#FF6666",
  "#FFB266",
  "#FFFF66",
  "#B2FF66",
  "#66FF66",
  "#66FFB2",
  "#66FFFF",
  "#66B2FF",
  "#6666FF",
  "#B266FF",
  "#FF66FF",
  "#FF66B2",
];

const AlphabetFinder = () => {
  const [language, setLanguage] = useState("uz");
  const [letters, setLetters] = useState(alphabets[language]);
  const [currentLetter, setCurrentLetter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLetters(alphabets[language]);
    pickNewLetter();
  }, [language]);

  const pickNewLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letter = letters[randomIndex];
    setCurrentLetter(letter);
    speak(letter, language);
    setMessage("");
  };

  const speak = (text, lang) => {
    if (!window.speechSynthesis) {
      alert("Speech Synthesis API qo'llab-quvvatlanmaydi");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang =
      lang === "uz" ? "uz-UZ" : "en-US";

    // Ovozlarni brauzer ovozlari orasidan tanlash uchun:
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang.startsWith(utterance.lang));
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  const handleClick = (letter) => {
    if (letter === currentLetter) {
      setMessage("✅ To'g'ri!");
      setTimeout(() => {
        pickNewLetter();
      }, 1500);
    } else {
      setMessage("❌ Noto'g'ri, yana urinib ko'ring!");
    }
  };

  return (
    <div className="container text-center py-5">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Asosiy</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/games">O'yinlar</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Ovoz orqali harf topish
          </li>
        </ol>
      </nav>
      <h2>Harfni Tanla (Alphabet Finder)</h2>

      <div className="mb-4">
        <select
          className="form-select w-auto mx-auto"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="uz">O'zbekcha</option>
          <option value="en">English</option>
        </select>
      </div>

      <div
        className="d-flex flex-wrap justify-content-center mb-3"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {letters.map((letter, i) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            style={{
              backgroundColor: colors[i % colors.length],
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              width: "60px",
              height: "60px",
              margin: "5px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      <button
        className="btn btn-primary mb-3"
        onClick={() => speak(currentLetter, language)}
      >
        Harfni qayta aytish 🔊
      </button>

      {message && <div className="fs-4 fw-bold">{message}</div>}
    </div>
  );
};

export default AlphabetFinder;
