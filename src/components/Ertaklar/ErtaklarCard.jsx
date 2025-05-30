import { Link } from "react-router-dom"
export default function ErtaklarCard({ name, description, star, category, img, link }) {
    return (
        <div className='cardlar'>
            <Link to={`${link}`}>
                <img src={img} alt="img" />
                <div className="text-card">
                    <div className="story-name"><h3>{name}</h3> <div className="category">{category}</div></div>
                    <div className="description-story">{description}</div>

                    <div className='story-stars'>{star}</div>
                </div>
            </Link>
        </div>
    )
}
