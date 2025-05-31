import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../../context/Context";
import axios from "axios";
import Swiper from "swiper";

export default function VideoDarslar() {
    const { a, generateSlug, aload, seta, setaLoad, domen } = useContext(MainContext);
    const { slug } = useParams();

    // Загружаем данные при монтировании компонента
    useEffect(() => {
        setaLoad(true);
        axios.get(`${domen}/api/videodarslar/`)
            .then(response => {
                seta(response.data);
                setaLoad(false);
            })
            .catch(error => {
                console.error('Xatolik:', error);
                setaLoad(false); // В случае ошибки отключаем загрузку
            });
    }, [domen, seta, setaLoad]); // Добавляем зависимости, чтобы не было лишних перезапусков
    // Если a ещё не загружены, показываем лоадер
    // setaLoad(true)
    if (aload) {
        return <div style={{ height:"1000px",width:"10%",textAlign: "center", margin: "0 auto",display:"flex",justifyContent:"center",flexDirection:"column"}}><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>
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
        <div className="darslar-royhati">
            <h1>{user.name} bo'yicha video-darslar</h1>
            {/* Здесь можно добавить Swiper или другие компоненты */}
        </div>
    );
}
