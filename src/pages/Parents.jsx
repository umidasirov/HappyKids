import { Link } from "react-router-dom"
export default function Parents() {
    return (
            <div className="Ota-onalar p-4">
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Ota onalar uchun</li>
                    </ol>
                </nav>
            </div>
    )
}