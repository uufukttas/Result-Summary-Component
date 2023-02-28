import data from "../../consts/data";
import BadgeItem from "./BadgeItem";

const Badges = () => {
    return (
        <div className="badges-container">
            {
                data.map((badge, index) => <BadgeItem key={index} category={badge.category} score={badge.score} icon={badge.icon} />)
            }
        </div>
    )
};

export default Badges;