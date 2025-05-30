import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div className='mt-20 p-4 not-found'>
      <nav
        style={{ "--bs-breadcrumb-divider": "'>'" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Asosiy</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            ??????
          </li>
        </ol>
      </nav>
      <p>
        Sahifa topilmadi 😞
      </p>
    </div>

  )
}
