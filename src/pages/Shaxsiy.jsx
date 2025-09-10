import { useContext, useEffect } from "react";
import { MainContext } from "../context/Context";
import LearningProccess from "../components/LearningProccess";
import axios from "axios";
import QuickLinks from "../components/QuickLinks";
import Subjects from "../components/Mashqlar/Subjects/Subjects";

// Random color generator for avatar background
function getRandomColor() {
  const colors = [
    "#FFD700", // yellow
    "#FF69B4", // pink
    "#87CEEB", // blue
    "#98FB98", // green
    "#FFA07A", // orange
    "#BA55D3", // purple
    "#FFB347", // light orange
    "#40E0D0", // turquoise
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Shaxsiy() {
  const { getUser, domen, a, seta, setaLoad } = useContext(MainContext);

  useEffect(() => {
    setaLoad(true);
    axios
      .get(`${domen}/api/items/`)
      .then((response) => {
        seta(response.data);
        setaLoad(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  // Avatar background color
  const avatarBg = getRandomColor();

  return (
    <div
      className="Shaxsiy"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
    >
      <div className="left-container">
        <div className="profile">
          <div className="main-avatar">
            {getUser && getUser.avatar ? (
              <div className="avatar">
                <img
                  src={getUser.avatar}
                  alt=""
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "4px solid #FFD700",
                    boxShadow: "0 2px 8px #FFD70055",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <div
                className="avatar-main"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: avatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                  fontWeight: "bold",
                  color: "#fff",
                  border: "4px solid #fff",
                  boxShadow: "0 2px 8px #FFD70055",
                  marginBottom: 8,
                  userSelect: "none",
                }}
              >
                {getUser && getUser.ism ? getUser.ism[0].toUpperCase() : ""}
              </div>
            )}
            <div className="profile-det">
              <div
                className="name"
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#FF69B4",
                  textShadow: "1px 1px 2px #fff",
                }}
              >
                {getUser && getUser.familia} {getUser && getUser.ism}
              </div>
              <p style={{ fontWeight: "300", textAlign: "right" }}>
                {/* {old} Yosh */}
              </p>
            </div>
          </div>
          <div className="email a" style={{ color: "#40E0D0" }}>
            e-mail:{" "}
            <a href={getUser && getUser.email ? getUser.email : "#"}>
              {getUser && getUser.email}
            </a>
          </div>
          <div className="telNum a" style={{ color: "#BA55D3" }}>
            Raqami: {getUser && getUser.telRaqam}
          </div>
          <div className="town a" style={{ color: "#FFD700" }}>
            Shaxri: {getUser && getUser.shaxar}
          </div>
          <div className="coures">
            <h1 style={{ color: "#FFB347", fontSize: 20 }}>Ko'rilgan kurslar:</h1>
            <div className="courses-profile" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {a &&
                a.map(
                  (subject) =>
                    getUser &&
                    Array.isArray(getUser.courses) &&
                    getUser.courses.includes(subject.id) && (
                      <div
                        className="kurs"
                        key={subject.id}
                        style={{
                          background: "#FFFACD",
                          borderRadius: 16,
                          padding: 8,
                          boxShadow: "0 2px 6px #FFD70033",
                          minWidth: 120,
                        }}
                      >
                        <div className="subjectLessons">
                          <Subjects
                            lessonName={subject.name}
                            img={subject.img}
                            data={subject.course}
                          />
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
          <LearningProccess
            category="O'zlashtirish"
            percent={40}
            BorderCol="white"
            BackCol="red"
          />
        </div>
        <QuickLinks />
      </div>
    </div>
  );
}