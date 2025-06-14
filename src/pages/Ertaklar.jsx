import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../context/Context"
import ErtaklarCard from "../components/Ertaklar/ErtaklarCard"
export default function Ertaklar() {
  const { ertaklar, generateSlug } = useContext(MainContext)

  return (
    <div className="Ertaklar p-4">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Ertaklar</li>
        </ol>
      </nav>
      <div className="ertaklar" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        {ertaklar.map((e) => (
          <ErtaklarCard name={e.name} img={e.img} description={e.description} star={e.stars} slug={generateSlug(e.name)} />
        ))}
      </div>
    </div>
  )
}