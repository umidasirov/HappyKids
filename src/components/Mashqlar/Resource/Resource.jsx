import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Button from "../../Button";
import { MainContext } from "../../../context/Context";

export default function Resource() {

    const [isLoad, setLoad] = useState([]); // <-- пустой массив
    const [kitoblar, setKitoblar] = useState([]); // <-- пустой массив
    const { domen } = useContext(MainContext);

    useEffect(() => {
        setLoad(true)
        axios.get(`${domen}/api/api/files/`)
            .then(response => {
                setKitoblar(response.data);
                setLoad(false)
            })
            .catch(error => {
                console.error('Xatolik:', error);
            });
    }, [domen]);

    return (
        <div className="Resource p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Resurslar</li>
                </ol>
            </nav>
            <div className="main-resource">
                {isLoad ? <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : ''}
                {kitoblar.map((e) => (
                    <div className="kitoblar" key={e.id || e.name} data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={e.img} alt={e.name} />
                        <p>{e.name}</p>
                        <Link to={e.file}><Button>Yuklab olish</Button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
