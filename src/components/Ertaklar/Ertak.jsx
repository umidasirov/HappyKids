import { useContext } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { MainContext } from "../../context/Context";
export default function Ertak() {
    const { ertaklar, generateSlug } = useContext(MainContext)
    const { slug } = useParams()
    const user = ertaklar.find(u => generateSlug(u.name) === slug);

    if (!user) {
        return <div>Topilmadi</div>
    }
    return (
        <div className="p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/story">Ertaklar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{user.name}</li>
                </ol>
            </nav>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h1>{user.name}</h1>
                <p>{user.mainText}</p>
            </div>
        </div>
    );
}