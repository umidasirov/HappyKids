import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Subjects from "../Subjects/Subjects"
import { MainContext } from "../../../context/Context"

export default function Video() {
    const [a, seta] = useState([])
    const [aload, setaLoad] = useState([])
    const { domen } = useContext(MainContext)
    useEffect(() => {
        setaLoad(true);
        axios.get(`${domen}/api/videodarslar/`)
            .then(response => {
                seta(response.data);
                setaLoad(false);
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
                <div className="div p-4 text-center spinner">{aload ? <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div> : ""}</div>
                {a.map((subject, idx) => (
                    <div className="subjectLessons" key={subject.name}>
                        <Subjects lessonName={subject.name} img={subject.img} data={subject.course} />
                    </div>
                ))}
            </div>
        </div>
    )
}
