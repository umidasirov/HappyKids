import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
import img from "../files/brand/logo.svg"
import star from "../files/main/star.svg"
import rectangle from "../files/main/rectangle.svg"
import circle from "../files/main/circle.svg"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { MainContext } from "../context/Context"
export default function Main() {
    const [isLog, setIsLog] = useState(false)
    const {getUser, isLogin} = useContext(MainContext)
    return (
        <div className='main'
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="main-banner">
                <div className="first-main-container">
                    {
                        isLogin?
                        <h3>Salom <span style={{color:"green"}}>{getUser.ism}</span></h3>
                        :
                        <h2>Xush kelibsiz</h2>
                    }
                    <h1 className="title-main">O'rganish <span className='logo-style'>Happy Kids</span> bilan ajoyib!</h1>
                    <p>Interaktiv oyinlar, ertaklar, mashqlar bolalar uchun qiziquvcha shakilda qilingan</p>
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
        </div>
    )
}