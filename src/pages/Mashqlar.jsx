import { Link } from "react-router-dom"
export default function Mashqlar() {
    return (
        <div className="Mashqlar p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Mashqlar</li>
                </ol>
            </nav>
        </div>
    )
}
