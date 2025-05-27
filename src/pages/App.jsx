import { useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import Button from "../components/Button";
import CategoryButton from "../components/CategoryButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SecondaryButton from "../components/SecondaryButton";
import Main from "./Main";
import Login from "../components/Login";
import Register from "../components/Register";
import Shaxsiy from "./Shaxsiy";
import { MainContext } from "../context/Context";
import PrivateRoute ,{PrivateFor} from "../Routes/PrivateRote";
import Footer from "../components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  const { isLogin } = useContext(MainContext)
  return (
    <div className='app'>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={
            <PrivateFor to='/'>
              <Login />
            </PrivateFor>
          } />
          <Route path="/register" element={<Register />} />

          {/* Защищённый маршрут */}
          <Route
            path="/shaxsiy"
            element={
              <PrivateRoute to='/login'>
                <Shaxsiy />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
          <Footer/>
    </div>
  );
}
