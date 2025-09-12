import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../context/Context";
export default function QuickLinks() {
  const { logoutUser } = useContext(MainContext);
  return (
    <div className="quick-links" style={{marginTop:20}}>
      <h3 style={{ color: "#4f46e5" }}>Tezkor panel</h3>
      <div className="quick-panel">
        <NavLink to="/">
          <i class="bi bi-house"></i> Asosiy
        </NavLink>
        <NavLink to="/games">
          <i class="bi bi-controller"></i> Oyinlar
        </NavLink>
        <NavLink to="/story">
          <i class="bi bi-book"></i> Ertaklar
        </NavLink>
        <NavLink to="/activities">
          <i class="bi bi-fire"></i> Mashqlar
        </NavLink>
        <NavLink onClick={() => logoutUser()}>
          <i class="bi bi-box-arrow-left"></i> Chiqish
        </NavLink>
      </div>
    </div>
  );
}
