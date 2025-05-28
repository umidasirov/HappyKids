import { Route,Routes } from "react-router-dom";
import ColorGame from "../components/Games/ColorGame";

export default function Games() {
  console.log("islayapti");
  
  return (
    <div className="p-6 games">
      <h1 className="text-2xl font-bold mb-6 text-center">🎮 Mini O‘yinlar</h1>
      Boshqa o‘yinlar ham shu yerga qo‘shiladi
      salom
      <Routes>
        <Route path="/color-game" element={<ColorGame/>}/>
      </Routes>
    </div>
  );
}
