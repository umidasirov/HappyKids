import { useContext } from "react";
import Logo from "./Logo";
import MainBtn from "./MainBtn";
import SecondaryButton from "./SecondaryButton";
import { Link, NavLink } from "react-router-dom";
import { MainContext } from "../context/Context";
import Button from "./Button";
export default function Navbar() {
  const {
    user,
    sidebar,
    setSidebar,
    isLogin,
    setIsLogin,
    logoutUser,
    getUser,
    domen,
  } = useContext(MainContext);
  const authorization = () => {
    console.log(user.boy);
  };
  const setSidebarState = (e) => {
    setSidebar((e) => !e);
  };
  console.log("Bu kerak", getUser);
  return (
    <div className="nav">
      <div className="nav-container">
        <Logo />
        <div className={`sidebar ${sidebar ? "active" : ""}`}>
          <div className="category">
            <div className="logo-sidebar">
              <Logo />{" "}
              <button onClick={() => setSidebarState(sidebar)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <NavLink to="/" onClick={() => setSidebar(false)}>
              Asosiy
            </NavLink>
            <NavLink to="/games" onClick={() => setSidebar(false)}>
              Oyinlar
            </NavLink>
            <NavLink to="/story" onClick={() => setSidebar(false)}>
              Ertaklar
            </NavLink>
            <NavLink to="/activities" onClick={() => setSidebar(false)}>
              Mashqlar
            </NavLink>
          </div>
          <div className="btn-group-user">
            {!isLogin ? (
              <div className="d-flex">
                <Link to="/login" onClick={() => setSidebar(false)}>
                  <SecondaryButton>Kirish</SecondaryButton>
                </Link>
                <Link to="/register" onClick={() => setSidebar(false)}>
                  <MainBtn>Log up</MainBtn>
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="userBar" to="/shaxsiy">
                  <div
                  className=" rounded-full bg-gray-200 border"
                    onClick={() => setSidebar(false)}
                    style={!getUser.avatar ? { padding: "8px 15px" } : null}
                  >
                      <span className="d-flex align-items-center justify-content-center flex-column" style={{height:"100%"}}>
                        {getUser.ism[0]}
                      </span>
                  </div>
                </Link>
                <div
                  className="log-out"
                  onClick={() => (logoutUser(), setSidebar(false))}
                >
                  <Button onClick={() => setSidebar(false)}>log out</Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="burger-bar" onClick={() => setSidebarState(sidebar)}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </div>
  );
}
