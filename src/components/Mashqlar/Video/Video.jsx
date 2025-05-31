import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Subjects from "../Subjects/Subjects"

export default function Video() {
  const [a, seta] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:7000/api/videodarslar/`)
      .then(response => {
        seta(response.data);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, [])

  return (
    <div className="Video p-4">
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Asosiy</Link></li>
          <li className="breadcrumb-item"><Link to="/activities">Mashqlar</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Video-darslar</li>
        </ol>
      </nav>
      <div className="main-category">
        {a.map((subject, idx) => (
            <div className="subjectLessons" key={subject.name}>
                <Subjects lessonName={subject.name} img={subject.img} data={subject.course}/>
            </div>
        ))}
      </div>
    </div>
  )
}
