import { Route, Routes, Link } from "react-router-dom";
import ColorGame from "../components/Games/ColorGame";

export default function Games() {
  console.log("islayapti");

  return (
    <div className="p-6 games">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
          <li className="breadcrumb-item active" aria-current="page">O'yinlar</li>
        </ol>
      </nav>


      <Routes>
        <Route path="/" element={
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">🎮 Mini O‘yinlar</h1>
            Boshqa o‘yinlar ham shu yerga qo‘shiladi
            salom
            <Link to='/games/color-game'>Rang topish o'yini</Link>
          </div>
        } />
        <Route path="/color-game" element={<ColorGame />} />
      </Routes>
    </div>
  );
}