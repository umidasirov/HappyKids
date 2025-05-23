import { useContext } from "react"
import { MainContext } from "../context/Context"
import LearningProccess from "../components/LearningProccess";
import QuickLinks from "../components/QuickLinks";
export default function Shaxsiy() {
  const { getUser } = useContext(MainContext)
  console.log(getUser);
  const yearBirth = getUser.tugulganKuni.split('.')[2];
  const year = new Date().getFullYear();
  console.log(year);
  const old = year-yearBirth
  return (
    <div className='Shaxsiy'>
      <div className="left-container">
        <div className="profile">
          <div className="main-avatar">
            {getUser.avatar?
            <div className="avatar"><img src={getUser.avatar} alt="" /></div>
            :<div className="avatar-main">{getUser.ism[0]}</div>
            }
            <div className="profile-det">
              <div className="name">{getUser.familia} {getUser.ism}</div>
              <p style={{fontWeight:'300',textAlign:'right'}}>{old} Yosh</p>
            </div>
          </div>
          <LearningProccess category="O'zlashtirish" percent={40} BorderCol='white' BackCol="red"/>
        </div>
      <QuickLinks/>
      </div>
    </div>
  )
}
