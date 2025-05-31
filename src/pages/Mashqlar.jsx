import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Scrollbar } from "swiper/modules"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../context/Context"
import MainBtn from "../components/MainBtn"
export default function Mashqlar() {
    const { topAct } = useContext(MainContext)
    return (
        <div className="Mashqlar p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Mashqlar</li>
                </ol>
            </nav>
            <div className="mashqlar-main-banner" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <Swiper
                    modules={[Autoplay,Scrollbar]}
                    spaceBetween={50}
                    scrollbar={{dragSize:300,enabled:true,draggable:true}}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {topAct.map((e) => (
                        <SwiperSlide>
                            <div className="slide">
                                <div className="mashqlar-slide-first">
                                    <h1>Fanlar boyicha <span style={{ color: e.color }}>{e.name}</span></h1>
                                    <p>{e.description}</p>
                                    <Link to={`/activities${e.link}`}>
                                        <MainBtn>O'tish ➡</MainBtn>
                                    </Link>
                                </div>
                                <div className="mashqlar-slide-second">
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
