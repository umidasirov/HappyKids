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
import PrivateRoute, { PrivateFor } from "../Routes/PrivateRote";
import Footer from "../components/Footer";
import Games from "./Games";
import Ertaklar from "./Ertaklar";
import Parents from "./Parents";
import Mashqlar from "./Mashqlar";
import NotFound from "../components/NotFound";
import Ertak from "../components/Ertaklar/Ertak";
import Resource from "../components/Mashqlar/Resource/Resource";
import Video from "../components/Mashqlar/Video/Video";
import Tests from "../components/Mashqlar/Test/Tests";
import VideoDarslar from "../components/Mashqlar/Video/VideoDarslar";
import FanlarTest from "../components/Mashqlar/Test/FanlarTest";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 10000,
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
            </PrivateFor>} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/shaxsiy"
            element={
              <PrivateRoute to='/login'>
                <Shaxsiy />
              </PrivateRoute>
            }
          />
          <Route path="/games/*" element={<Games />}/>
          <Route path="/story" element={<Ertaklar/>}/>
          <Route path="/parents" element={<Parents/>}/>
          <Route path="/activities" element={<Mashqlar/>}/>
          <Route path="/story/:slug" element={<Ertak/>}/>
          <Route path="/activities/matematika" element={<Resource/>}/>
          <Route path="/activities/video-dars" element={<Video/>}/>
          <Route path="/activities/test" element={<FanlarTest/>}/>
          <Route path="/activities/test/math" element={<Tests/>}/>
          <Route path="/activities/video-dars/:slug" element={<VideoDarslar/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
