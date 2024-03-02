import Logo from "../Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const PopUp = () => {
  return (
    <div className="popup">
        
      <div className="menu-page">
        <FontAwesomeIcon
          icon={faClose}
          className="menu-close"
          onClick={menuHandler}
        />
        <div className="menu-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <h5>About</h5>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div>
          <h5>Contact Us</h5>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div>
          <h5>FAQ</h5>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
