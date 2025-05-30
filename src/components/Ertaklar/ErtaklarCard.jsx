import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../../context/Context"
export default function ErtaklarCard({ name, description, star, category, img, slug }) {
    const {short} = useContext(MainContext)
    return (
        <div className='cardlar'>
            <Link to={`/story/${slug}`}>
                <img src={img} alt="img" />
                <div className="text-card">
                    <div className="story-name"><h3>{name}</h3> <div className="category">{category}</div></div>
                    <div className="description-story">{short(170,description)}</div>

                    <div className='story-stars'>{star}</div>
                </div>
            </Link>
        </div>
    )
}
