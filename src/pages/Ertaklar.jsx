import { Link } from "react-router-dom"
export default function Ertaklar() {
    return (
          <div className="Ertaklar p-4">
              <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Ertaklar</li>
                </ol>
              </nav>
          </div>
    )
}