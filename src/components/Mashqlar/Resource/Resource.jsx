import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../../../context/Context"
export default function Resource() {
const {kitoblar} = useContext(MainContext)
console.log(kitoblar);

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
                {kitoblar.map((e)=>(
                    <div className="kitoblar">
                        <img src={e.img} alt="" />
                        {e.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
