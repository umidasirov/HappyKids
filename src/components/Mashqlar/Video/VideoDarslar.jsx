import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../../context/Context";
import axios from "axios";
import Swiper from "swiper";
import { Link } from "react-router-dom";
export default function VideoDarslar() {
    const { a, generateSlug, aload, seta, setaLoad, domen } = useContext(MainContext);
    const { slug } = useParams();

    // Загружаем данные при монтировании компонента
    useEffect(() => {
        setaLoad(true);
        axios.get(`${domen}/api/items/`)
            .then(response => {
                seta(response.data);
                setaLoad(false);
            })
            .catch(error => {
                console.error('Xatolik:', error);
                setaLoad(false);
            });
    }, [domen, seta, setaLoad]);

    if (aload) {
        return <div style={{ height: "1000px", width: "10%", textAlign: "center", margin: "0 auto", display: "flex", justifyContent: "center", flexDirection: "column" }}><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>
    }

    // Если данных нет или массив пуст
    if (!a || a.length === 0) {
        return <div>Данные не найдены</div>;
    }

    // Ищем нужного пользователя по slug
    const user = a.find(u => generateSlug(u.name) === slug);

    // Если user не найден, показываем, что страница не существует
    if (!user) {
        return <div>Видео-даруслар не найдены для выбранного курса</div>;
    }

    return (
        <div className="darslar-royhati p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities/video-dars">Video-darslar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{user.name}</li>
                </ol>
            </nav>
            <h1>{user.name} bo'yicha video-darslar</h1>
            <div class="accordion" id="accordionExample">
                {user.courses.map((e, index) => (
                    <div className="accordion-item" key={e.name}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}  // Уникальный target для каждого элемента
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}  // Уникальный controls
                            >
                                {e.name}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}  // Уникальный ID для каждого аккордеона
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}  // Связь с уникальной кнопкой
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body d-flex justify-content-center" >
                                {/* Встраиваем iframe с видео */}
                                <iframe
                                    width="860"
                                    height="515"
                                    src={e.url} // Вставка URL видео
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
