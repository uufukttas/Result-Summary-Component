import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faBrain, faComment, faEye } from "@fortawesome/free-solid-svg-icons";

const BadgeItem = ({ category, score, icon }) => {
    return (
        <div className={`badge badge-${category.toLowerCase()} flex justify-between items-center w-full`}>
            <div className="information-wrapper flex items-center justify-center">
                <FontAwesomeIcon icon={icon} />
                <p className="badge-name px-2">{category}</p>
            </div>
            <div className="score-wrapper">
                <p>{score} / 100</p>
            </div>
        </div>
    )
};

export default BadgeItem;