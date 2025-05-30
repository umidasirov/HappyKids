import { Link } from "react-router-dom"
export default function Resource() {

    return (
        <div className="Resource p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Resurslar</li>
                </ol>
            </nav>
        </div>
    )
}
