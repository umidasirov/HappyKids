import { Route, Routes, Link } from "react-router-dom";
import ColorGame from "../components/Games/ColorGame";
import NumberCountingGame from "../components/Games/NumberCountingGame";
import AlphabetFinder from "../components/Games/AlphabetGame";
import MainBtn from "../components/MainBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { MainContext } from "../context/Context";
import "swiper/css";
import { Autoplay,Scrollbar } from "swiper/modules";
export default function Games() {
  console.log("islayapti");
  const { topgames, setTopGames } = useContext(MainContext);
  return (
    <div className="p-6 games">
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-games p-4">
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Asosiy</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    O'yinlar
                  </li>
                </ol>
              </nav>
              Salom, Boshqa o‘yinlar ham shu yerga qo‘shiladi👇🏽
              <div
                className="main-game-content"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="main-game-banner">
                  <Swiper
                    modules={[Autoplay,Scrollbar]}
                    spaceBetween={50}
                    scrollbar={{dragSize:300,enabled:true,draggable:true}}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {topgames.map((e) => (
                      <SwiperSlide>
                        <div className="slide">
                          <div className="game-slide-first">
                            <h1>{e.name}</h1>
                            <p>{e.description}</p>
                            <Link to={`/games${e.link}`}>
                              <MainBtn>O'yinga o'tish</MainBtn>
                            </Link>
                          </div>
                          <div className="game-slide-second">
                            <img src={e.img} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/color-game" element={<ColorGame />} />
        <Route path="/count-game" element={<NumberCountingGame />} />
        <Route path="/alphabet-game" element={<AlphabetFinder />} />
      </Routes>
    </div>
  );
}
