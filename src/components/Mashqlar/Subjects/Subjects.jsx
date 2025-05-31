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
          {/* {data.map((e) => (
          <div key={e.name}>
            <p>{e.name}</p>
            <iframe
              src={e.url.replace("watch?v=", "embed/")}
              width="560"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={e.name}
            />
          </div>
        ))} */}
        </div>
      </Link>
    </div>
  );
}
