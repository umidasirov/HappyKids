import { useContext } from "react";
import { Link } from "react-router-dom"
import { MainContext } from "../../../context/Context";
export default function Subjects({ img, lessonName, data }) {
  const { generateSlug } = useContext(MainContext)
  const link = generateSlug(lessonName)
  console.log(data);
  return (
    <div className="subjects" >
      <Link to={`/activities/video-dars/${link}`}>
        <img src={img} alt={lessonName} />
        <div className="content-subject">
          <h3>{lessonName}</h3>
        </div>
      </Link>
    </div>
  );
}
