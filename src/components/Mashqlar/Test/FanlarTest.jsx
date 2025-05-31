import { Link } from "react-router-dom";
import Button from "../../Button";
import img from "../../../files/math.jpg"
export default function FanlarTest() {
    return (
        <div className="fanlar-test p-4">
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
                        <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Testlar</li>
                    </ol>
                </nav>
            <div className="fanlar">
                <div className="card-subject">
                    <Link to='/activities/test/math'>
                        <img src={img} alt="" />
                        <div className="card-text">
                            <h3>
                                Matematikadan test
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}