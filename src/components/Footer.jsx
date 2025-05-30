import { Link } from "react-router-dom";
import { MainContext } from "../context/Context";
import react, { useContext } from "react";
export default function Footer() {
  const { categories } = useContext(MainContext);
  return (
    <div className="footer" data-aos="fade-up"
      data-aos-duration="1000">
      <div className="first-footer-category">
        <Link className="logo-footer" to="/">
          🙂 Happy kids
        </Link>
        <div className="first-footer-description">
          Bolaojnaringiz uchun qiziqarli sarguzashtlar. O'yin va ta'lim orqali
          bolalarning osishiga yordam berish
        </div>
        <div className="social-networks">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-telegram"></i>
          <i className="bi bi-github"></i>
        </div>
      </div>
      <div className="second-footer footer-con">
        <div className="second-main foot-title">Tez Havolalar</div>
        <div className="mini-bar">
          {categories.map((e) => (
            <Link key={e.link} to={e.link}>{e.title}</Link>
          ))}
        </div>
      </div>

      <div className="third-footer footer-con" >
        <div className="third-main foot-title">Yosh Guruhlar</div>
        <div className="mini-bar">
          <div>0 - 2 yosh</div>
          <div>3 - 4 yosh</div>
          <div>5 - 6 yosh</div>
          <div>8+ yosh</div>
        </div>
      </div>

      <div className="third-footer footer-con">
        <div className="third-main foot-title">Aloqa</div>
        <div className="mini-bar">
          <div><i className="bi bi-envelope"></i> umidasirov55@gmail.com</div>
          <div><i className="bi bi-telephone"> +998950934060</i></div>
          <div><i className="bi bi-geo"></i> Amir Temur Shoh kochasi TATU</div>
        </div>
      </div>

    </div>
  );
}
