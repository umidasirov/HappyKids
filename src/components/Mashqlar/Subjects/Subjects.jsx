import { Link } from "react-router-dom"
export default function Subjects({ img, lessonName, data }) {
  return (
    <div className="subjects">
      <img src={img} alt={lessonName} />
      <div className="content-subject">
        <h3>{lessonName}</h3>
        {data.map((e) => (
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
        ))}
      </div>
    </div>
  );
}
