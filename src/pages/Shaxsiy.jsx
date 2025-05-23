import { useContext } from "react"
import { MainContext } from "../context/Context"
export default function Shaxsiy() {
    const {getUser} = useContext(MainContext)
    console.log(getUser);
    
  return (
    <div className='Shaxsiy'>
      <img src={getUser.avatar} alt={getUser.ism} />
    </div>
  )
}
