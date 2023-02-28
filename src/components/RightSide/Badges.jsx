import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoltLightning, faBrain, faComment, faEye } from "@fortawesome/free-solid-svg-icons"

const Badges = () => {
  return (
    <div className="badges-container">
        <div className="badge badge-reaction flex justify-between items-center w-full">
            <div className="information-wrapper flex items-center justify-center">
                <FontAwesomeIcon icon={faBoltLightning} />
                <p className="badge-name px-2">Reaction</p>
            </div>
            <div className="score-wrapper">
                <p>80 / 100</p>
            </div>
        </div>
        <div className="badge badge-memory flex justify-between items-center w-full">
            <div className="information-wrapper flex items-center justify-center">
                <FontAwesomeIcon icon={faBrain} inverse/>
                <p className="badge-name px-2">Memory</p>
            </div>
            <div className="score-wrapper">
                <p>92 / 100</p>
            </div>
        </div>
        <div className="badge badge-verbal flex justify-between items-center w-full">
            <div className="information-wrapper flex items-center justify-center">
                <FontAwesomeIcon icon={faComment} />
                <p className="badge-name px-2">Verbal</p>
            </div>
            <div className="score-wrapper">
                <p>61 / 100</p>
            </div>
        </div>
        <div className="badge badge-visual flex justify-between items-center w-full">
            <div className="information-wrapper flex items-center justify-center">
                <FontAwesomeIcon icon={faEye} />
                <p className="badge-name px-2">Visual</p>
            </div>
            <div className="score-wrapper">
                <p>72 / 100</p>
            </div>
        </div>
        
    </div>
  )
};

export default Badges;