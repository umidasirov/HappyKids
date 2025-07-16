import { useContext } from "react";
import { useEffect } from "react";
import { MainContext } from "../context/Context";
import LearningProccess from "../components/LearningProccess";
import axios from "axios";
import QuickLinks from "../components/QuickLinks";
import Subjects from "../components/Mashqlar/Subjects/Subjects";
export default function Shaxsiy() {
  const { getUser, domen, a, seta, setaLoad, } = useContext(MainContext);

  console.log(getUser);
  // const yearBirth = getUser.tugulganKuni.split(".")[2];
  // const year = new Date().getFullYear();
  // console.log(year);
  // const old = year - yearBirth;

  useEffect(() => {
    setaLoad(true);
    axios.get(`${domen}/api/items/`)
      .then(response => {
        seta(response.data);
        setaLoad(false);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, [])
  console.log(a);

  return (
    <div
      className="Shaxsiy"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="left-container">
        <div className="profile">
          <div className="main-avatar">
            {domen + getUser.avatar ? (
              <div className="avatar">
                <img src={domen + getUser.avatar} alt="" />
              </div>
            ) : (
              <div className="avatar-main">{getUser.ism[0]}</div>
            )}
            <div className="profile-det">
              <div className="name">
                {getUser.familia} {getUser.ism}
              </div>
              <p style={{ fontWeight: "300", textAlign: "right" }}>
                {/* {old} Yosh */}
              </p>
            </div>
          </div>
          <LearningProccess
            category="O'zlashtirish"
            percent={40}
            BorderCol="white"
            BackCol="red"
          />
          <div className="email a">
            e-mail: <a href={getUser.email}>{getUser.email}</a>
          </div>
          <div className="telNum a">Raqami: {getUser.telRaqam}</div>
          <div className="town a ">Shaxri: {getUser.shaxar}</div>
          <div className="coures">
            <h1>
              Ko'rilgan kurslar:
            </h1>
            <div className="courses-profile">
              {a.map((subject) => (
                <div>
                  {subject.id == getUser.courses[subject.id - 1] ?
                    <div className="kurs">
                      <div className="subjectLessons" key={subject.name || idx}>
                        <Subjects lessonName={subject.name} img={subject.img} data={subject.course} />
                      </div>
                    </div> : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
        <QuickLinks />
      </div>
    </div>
  );
}
