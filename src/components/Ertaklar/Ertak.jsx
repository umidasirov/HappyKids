import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/Context";
export default function Ertak() {
  const { ertaklar, generateSlug } = useContext(MainContext);
  const { slug } = useParams();
  const user = ertaklar.find((u) => generateSlug(u.name) === slug);

  if (!user) {
    return <div>Topilmadi</div>;
  }
  return (
    <div className="p-4 ertak">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Asosiy</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/story">Ertaklar</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {user.name}
          </li>
        </ol>
      </nav>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="p-3 rounded bg-gradient-to-br from-amber-50 to-orange-100 p-8 md:p-12 rounded-2xl shadow-xl border border-amber-200"
      >
        <h1 className="text-4xl font-serif font-bold text-center text-amber-900 mb-8">
          {user.name}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-relaxed">
          {user.main_text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-5 first-letter:text-4xl first-letter:font-bold first-letter:text-amber-700 first-letter:mr-1 first-letter:float-left"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 text-center text-sm italic text-gray-500">
          ✨ Haqiqiy boylik – mehnat va salomatlik ✨
        </div>
      </div>
    </div>
  );
}
