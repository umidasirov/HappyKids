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
            O'rganish <span className="logo-style">Happy Baby</span> bilan
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
            <Link to={!isLog ? "/game" : "/login"}>
              <Button>Boshlash</Button>
            </Link>
            <SecondaryButton>Ko'proq</SecondaryButton>
          </div>
        </div>
        <div className="second-main-container">
          <img src={img} alt="" className="animation_top_back" />
          <div className="star">
            <img src={star} alt="" className="animation_circle" />
          </div>
          <div className="circ">
            <img src={circle} alt="" className="animation_circle" />
          </div>
          <div className="rec">
            <img src={rectangle} className="animation_circle" alt="" />
          </div>
        </div>
      </div>
      <div className="title">Nega Ota-onalar va Bolalar Bizni Tanlaydi </div>
      <div className="why_us">
        {whyUs.map((e) => (
          <div
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
                  <div className="icon">{categoryIcons[category.title]}</div>
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
        spaceBetween={50}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="comment-card">
            <div className="parent">
              <div className="avatar">S</div>
              <div className="whose-parent">
                <div className="name-parent">Sarah Johnson</div>
                <div className="parent-child">Mom of Emma, 4</div>
              </div>
            </div>
            <div className="parent-main-commetn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur cumque corrupti unde iste eaque quas odit maxime ullam
              officia veritatis maiores reprehenderit asperiores expedita libero
              sequi numquam, quidem vitae.
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-card">
            <div className="parent">
              <div className="avatar">S</div>
              <div className="whose-parent">
                <div className="name-parent">Sarah Johnson</div>
                <div className="parent-child">Mom of Emma, 4</div>
              </div>
            </div>
            <div className="parent-main-commetn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur cumque corrupti unde iste eaque quas odit maxime ullam
              officia veritatis maiores reprehenderit asperiores expedita libero
              sequi numquam, quidem vitae.
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-card">
            <div className="parent">
              <div className="avatar">S</div>
              <div className="whose-parent">
                <div className="name-parent">Sarah Johnson</div>
                <div className="parent-child">Mom of Emma, 4</div>
              </div>
            </div>
            <div className="parent-main-commetn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur cumque corrupti unde iste eaque quas odit maxime ullam
              officia veritatis maiores reprehenderit asperiores expedita libero
              sequi numquam, quidem vitae.
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-card">
            <div className="parent">
              <div className="avatar">S</div>
              <div className="whose-parent">
                <div className="name-parent">Sarah Johnson</div>
                <div className="parent-child">Mom of Emma, 4</div>
              </div>
            </div>
            <div className="parent-main-commetn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur cumque corrupti unde iste eaque quas odit maxime ullam
              officia veritatis maiores reprehenderit asperiores expedita libero
              sequi numquam, quidem vitae.
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comment-card">
            <div className="parent">
              <div className="avatar">S</div>
              <div className="whose-parent">
                <div className="name-parent">Sarah Johnson</div>
                <div className="parent-child">Mom of Emma, 4</div>
              </div>
            </div>
            <div className="parent-main-commetn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur cumque corrupti unde iste eaque quas odit maxime ullam
              officia veritatis maiores reprehenderit asperiores expedita libero
              sequi numquam, quidem vitae.
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
      </Swiper>

      </div>
    </div>
  );
}
