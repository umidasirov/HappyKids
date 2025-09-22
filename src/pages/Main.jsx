import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import img from "../files/brand/logo.svg";
import star from "../files/main/star.svg";
import rectangle from "../files/main/rectangle.svg";
import circle from "../files/main/circle.svg";
import { Link } from "react-router-dom";
import { MainContext } from "../context/Context";
import { useState, useContext } from "react";
import {
  BsController,
  BsBook,
  BsPuzzle,
  BsPeople,
  BsStar,
  BsCircle,
  BsSquare,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function Main() {
  const [isLog, setIsLog] = useState(false);
  const { whyUs, categories } = useContext(MainContext);

  const categoryIcons = {
    Games: <BsController size={50} />,
    Stories: <BsBook size={50} />,
    Activities: <BsPuzzle size={50} />,
    Parents: <BsPeople size={50} />,
  };

  return (
    <div
      className="main"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div
        className="main-banner"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="first-main-container">
          <h1 className="title-main">
            O'rganish <span className="logo-style">Happy Kids</span> bilan
            ajoyib!
          </h1>
          <p>
            Interaktiv oyinlar, ertaklar, mashqlar bolalar uchun qiziquvcha
            shakilda qilingan.Ertaklar, o‘yinlar va mashqlar orqali bolalar
            o‘rganishni oson va qiziqarli qilishadi. Har bir o‘yin va mashq
            bolaning tabiiy qiziqishini uyg‘otib, ularni yangi bilimlarga oshno
            qiladi.
          </p>
          <div className="btn-group">
            <Link to={!isLog ? "/games" : "/login"}>
              <Button>Boshlash</Button>
            </Link>
            <Link to="/activities">
              <SecondaryButton>Ko'proq</SecondaryButton>
            </Link>
          </div>
        </div>
        <div className="second-main-container">
          <img src={img} alt="" className="animation_top_back" />
          <div className="star">
            <img src={star} alt="" className="animation_circle2" />
          </div>
          <div className="circ">
            <img src={circle} alt="" className="animation_circle" />
          </div>
          <div className="rec">
            <img src={rectangle} className="animation_circle" alt="" />
          </div>
        </div>
      </div>
      <div className="title">Nega ota-onalar va bolalar bizni tanlaydi </div>
      <div className="why_us">
        {whyUs.map((e) => (
          <div
            key={e.description}
            className="why_cards"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            style={{ background: e.back }}
          >
            <div className="icon_circle" style={{ background: e.darkBack }}>
              <i style={{ color: e.color }} className={`${e.icon}`}></i>
            </div>
            <div className="main_title">{e.main}</div>
            <p className="why_us_desc">{e.description}</p>
          </div>
        ))}
      </div>
      <div className="title">Bo‘limlarimiz bilan tanishing</div>
      <div className="categories-section">
        <div className="categories-section">
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="category-card sh"
              >
                <div
                  className="category-icon"
                  style={{
                    backgroundColor: category.bgColor,
                    color: category.bgColor,
                  }}
                >
                  <div className="overlay" />
                  <div className="icon">{categoryIcons[category.icon]}</div>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <Link
                  to={category.link}
                  className="category-link"
                  style={{ color: category.bgColor }}
                >
                  Explore <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="title">Ota onalarning fikrlari</div>
      <div className="comments">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          slidesPerView={1} // default
          breakpoints={{
            640: {
              // 📱 telefon (>=640px)
              slidesPerView: 1,
            },
            768: {
              // 📱 planshet (>=768px)
              slidesPerView: 2,
            },
            1024: {
              // 💻 kompyuter (>=1024px)
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div
              className="comment-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "24px 18px",
                margin: "10px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="parent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="whose-parent">
                  <div
                    className="name-parent"
                    style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  >
                    Aziza Karimova
                  </div>
                  <div
                    className="parent-child"
                    style={{ color: "#888", fontSize: "0.95rem" }}
                  >
                    Sarvinoz ning onasi
                  </div>
                </div>
              </div>
              <div
                className="parent-main-commetn i"
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                Happy Kids platformasi orqali qizim ranglarni va sonlarni oson
                o'rgandi. O'yinlar juda qiziqarli va foydali! Har bir dars
                bolalar uchun moslashtirilgan.
              </div>
              <div
                className="stars"
                style={{ fontSize: "1.3rem", color: "#FFD700" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="comment-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "24px 18px",
                margin: "10px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="parent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="whose-parent">
                  <div
                    className="name-parent"
                    style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  >
                    Murod Xudoyberdiyev
                  </div>
                  <div
                    className="parent-child"
                    style={{ color: "#888", fontSize: "0.95rem" }}
                  >
                    Ali ning otasi
                  </div>
                </div>
              </div>
              <div
                className="parent-main-commetn"
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                Bolam har kuni yangi mashqlarni bajarayapti va o'z bilimini
                oshiryapti. Platforma juda qulay va bolalar uchun mos. O'yinlar
                orqali o'qish jarayoni yanada qiziqarli bo'ldi.
              </div>
              <div
                className="stars"
                style={{ fontSize: "1.3rem", color: "#FFD700" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="comment-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "24px 18px",
                margin: "10px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="parent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="whose-parent">
                  <div
                    className="name-parent"
                    style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  >
                    Dilnoza Tursunova
                  </div>
                  <div
                    className="parent-child"
                    style={{ color: "#888", fontSize: "0.95rem" }}
                  >
                    Madina ning onasi
                  </div>
                </div>
              </div>
              <div
                className="parent-main-commetn"
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                O'yinlar va ertaklar bolamga juda yoqdi. O'qituvchi sifatida ham
                tavsiya qilaman, bolalar uchun eng yaxshi tanlov! Darslar
                interaktiv va bolalar uchun juda foydali.
              </div>
              <div
                className="stars"
                style={{ fontSize: "1.3rem", color: "#FFD700" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="comment-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "24px 18px",
                margin: "10px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="parent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140061.png"
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="whose-parent">
                  <div
                    className="name-parent"
                    style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  >
                    Farrux Qodirov
                  </div>
                  <div
                    className="parent-child"
                    style={{ color: "#888", fontSize: "0.95rem" }}
                  >
                    Diyor ning otasi
                  </div>
                </div>
              </div>
              <div
                className="parent-main-commetn"
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                Diyor har kuni yangi o'yinlarni kutadi. Platforma bolamning
                fikrlashini va ijodkorligini rivojlantirdi. O'qituvchilar uchun
                ham juda qulay.
              </div>
              <div
                className="stars"
                style={{ fontSize: "1.3rem", color: "#FFD700" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="comment-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "24px 18px",
                margin: "10px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="parent"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="whose-parent">
                  <div
                    className="name-parent"
                    style={{ fontWeight: "600", fontSize: "1.1rem" }}
                  >
                    Sardor Tashpulatov
                  </div>
                  <div
                    className="parent-child"
                    style={{ color: "#888", fontSize: "0.95rem" }}
                  >
                    Shahzoda ning otasi
                  </div>
                </div>
              </div>
              <div
                className="parent-main-commetn"
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                Platforma orqali bolam mustaqil o'qishni va o'ylashni o'rgandi.
                O'yinlar va mashqlar bolalar uchun juda motivatsion va samarali.
              </div>
              <div
                className="stars"
                style={{ fontSize: "1.3rem", color: "#FFD700" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
