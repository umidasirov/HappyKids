import { Link } from "react-router-dom"
export default function Subjects({img,subject,link,lessonName}) {
  return (
    <Link className="subjects" to={link}>
      <img src={img} alt="" />
      <div className="content-subject">
        <div className="tag">{subject}</div>
        <h3>{lessonName}</h3>
      </div>
    </Link>
  )
}
