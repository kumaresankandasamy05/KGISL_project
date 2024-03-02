import React, { useState } from "react";

import Logo from "../Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [head, setHead] = useState(true);

  const menuHandler = () => {
    setHead((prev) => !prev);
  };
  return (
    <>
      {head ? (
        <header className="header">
          <div className="heder-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="header-menu">
            <FontAwesomeIcon icon={faBars} onClick={menuHandler} />
          </div>
        </header>
      ) : (
        <div className="menu" >
          <div className="menu-page">
            <div>
              <FontAwesomeIcon
                icon={faClose}
                className="menu-close"
                onClick={menuHandler}
              />
              <div className="menu-logo">
                <img src={Logo} alt="logo" />
              </div>
            </div>

            <div className="menu-list">
              <h5>
                About{" "}
                <FontAwesomeIcon icon={faArrowRight} className="menu-arrow1" />{" "}
              </h5>

              <h5>
                Contact Us{" "}
                <FontAwesomeIcon icon={faArrowRight} className="menu-arrow2" />{" "}
              </h5>

              <h5>
                FAQ{" "}
                <FontAwesomeIcon icon={faArrowRight} className="menu-arrow3" />{" "}
              </h5>
            </div>

            <div className="menu-ver">
              <h6>Ver.1.0.0</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
