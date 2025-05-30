import { Link } from "react-router-dom"
export default function Video() {
    return (
        <div className="Video p-4">
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                    <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Video-darslar</li>
                </ol>
            </nav>
        </div>
    )
}