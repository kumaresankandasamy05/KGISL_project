import React, { useReducer } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbs = () => {
  const initalArrow = {
    arrow1: false,
    arrow2: false,
    arrow3: false,
    arrow4: false,
  };

  const reduserArrow = (state, action) => {
    if (action.type === "arrow1") {
      return { ...state, arrow1: !state.arrow1 };
    }
    if (action.type === "arrow2") {
      return { ...state, arrow2: !state.arrow2 };
    }
    if (action.type === "arrow3") {
      return { ...state, arrow3: !state.arrow3 };
    }
    if (action.type === "arrow4") {
      return { ...state, arrow4: !state.arrow4 };
    }

    return state;
  };

  const initalValu = {
    icon1: true,
    icon2: false,
    icon3: false,
    icon4: false,
  };
  const reduser = (state, action) => {
    if (action.type === "icon1") {
      return { icon1: true, icon2: false, icon3: false, icon4: false };
    }
    if (action.type === "icon2") {
      return { icon1: false, icon2: true, icon3: false, icon4: false };
    }
    if (action.type === "icon3") {
      return { icon1: false, icon2: false, icon3: true, icon4: false };
    }
    if (action.type === "icon4") {
      return { icon1: false, icon2: false, icon3: false, icon4: true };
    }

    return state;
  };

  const [iconHover, setIconHover] = useReducer(reduser, initalValu);
  const [arrow, setArrow] = useReducer(reduserArrow, initalArrow);

  const hover = (props) => {
    setIconHover({ type: props });
  };

  const arrowHandler = (props) => {
    setArrow({ type: props });
  };

  return (
    <div className="bread">
      <div className="bread-mins">
        <p className="bread-8mins">8 mins</p>
        <p className="bread-12mins">12 mins</p>
      </div>
      <div className="bread-icons">
        <div
          className={iconHover.icon1 ? "bread-line icon-line" : "bread-line"}
          onClick={() => hover("icon1")}
        >
          <div
            className={
              iconHover.icon1 ? "bread-circle icon-circle" : "bread-circle"
            }
          >
            <FontAwesomeIcon
              icon={faHome}
              className={iconHover.icon1 ? "bread-icon icon" : "bread-icon"}
            />
          </div>
        </div>
        <div
          className={iconHover.icon2 ? "bread-line icon-line" : "bread-line"}
          onClick={() => hover("icon2")}
        >
          <div
            className={
              iconHover.icon2 ? "bread-circle icon-circle" : "bread-circle"
            }
          >
            <FontAwesomeIcon
              icon={faPhone}
              className={iconHover.icon2 ? "bread-icon icon" : "bread-icon"}
            />
            <FontAwesomeIcon icon={faCircleCheck} className="bread-check" />
          </div>
        </div>
        <div
          className={iconHover.icon3 ? "bread-line icon-line" : "bread-line"}
          onClick={() => hover("icon3")}
        >
          <div
            className={
              iconHover.icon3 ? "bread-circle icon-circle" : "bread-circle"
            }
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className={iconHover.icon3 ? "bread-icon icon" : "bread-icon"}
            />
          </div>
        </div>
        <div
          className={iconHover.icon4 ? "bread-line icon-line" : "bread-line"}
          onClick={() => hover("icon4")}
        >
          <div
            className={
              iconHover.icon4 ? "bread-circle icon-circle" : "bread-circle"
            }
          >
            <FontAwesomeIcon
              icon={faContactBook}
              className={iconHover.icon4 ? "bread-icon icon" : "bread-icon"}
            />
          </div>
        </div>
      </div>
      <div className="triangles">
        <div className={iconHover.icon1 ? "triangle" : "triangle hide"}></div>
        <div className={iconHover.icon2 ? "triangle" : "triangle hide"}></div>
        <div
          className={iconHover.icon3 ? "triangle" : "triangle hide"}
          onClick={hover}
        ></div>
        <div className={iconHover.icon4 ? "triangle" : "triangle hide"}></div>
      </div>

      <div className="bread-message">
        <div className="bread-head">
          <div className="bread-greeting">
            <p>Good Morning</p>
            <h4>Dear Attendant,</h4>
          </div>

          <div className="bread-time">
            <p>Friday, 23th may</p>
            <h5>8:55 am</h5>
          </div>
        </div>

        <div className="bread-list">
          <h2>
            New way to get costumers satisfied
            <FontAwesomeIcon
              icon={faArrowDown}
              className={arrow.arrow1 ? "bread-downArrow1" : "bread-arrow1"}
              onClick={() => arrowHandler("arrow1")}
            />
            {arrow.arrow1 && (
              <p>
                IMPORTANT: The contents of this email and any attachments are
                confidential. They are intended for the named recipient(s) only.
                If you have received this email by mistake, please notify the
                sender immediately and do not disclose the contents to anyone or
                make copies thereof
              </p>
            )}
          </h2>
          <h2>
            Training your soft skill and grow up
            <FontAwesomeIcon
              icon={faArrowDown}
              className={arrow.arrow2 ? "bread-downArrow2" : "bread-arrow2"}
              onClick={() => arrowHandler("arrow2")}
            />
            {arrow.arrow2 && (
              <p>
                IMPORTANT: The contents of this email and any attachments are
                confidential. They are intended for the named recipient(s) only.
                If you have received this email by mistake, please notify the
                sender immediately and do not disclose the contents to anyone or
                make copies thereof
              </p>
            )}
          </h2>
          <h2>
            New Products coming
            <FontAwesomeIcon
              icon={faArrowDown}
              className={arrow.arrow3 ? "bread-downArrow3" : "bread-arrow3"}
              onClick={() => arrowHandler("arrow3")}
            />
            {arrow.arrow3 && (
              <p>
                IMPORTANT: The contents of this email and any attachments are
                confidential. They are intended for the named recipient(s) only.
                If you have received this email by mistake, please notify the
                sender immediately and do not disclose the contents to anyone or
                make copies thereof
              </p>
            )}
          </h2>
          <h2>
            Check some videos to improve your goals
            <FontAwesomeIcon
              icon={faArrowDown}
              className={arrow.arrow4 ? "bread-downArrow4" : "bread-arrow4"}
              onClick={() => arrowHandler("arrow4")}
            />
            {arrow.arrow4 && (
              <p>
                IMPORTANT: The contents of this email and any attachments are
                confidential. They are intended for the named recipient(s) only.
                If you have received this email by mistake, please notify the
                sender immediately and do not disclose the contents to anyone or
                make copies thereof
              </p>
            )}
          </h2>
        </div>

        <div className="bread-bottom">
          <div className="bread-cases">
            <h1>08</h1>
            <h5>open cases</h5>
          </div>
          <div className="bread-cases">
            <h1>68</h1>
            <h5>total cases</h5>
          </div>
          <div className="bread-cases">
            <h1>32</h1>
            <h5>solve cases</h5>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} className="bread-star" />
            <FontAwesomeIcon icon={faStar} className="bread-star" />
            <FontAwesomeIcon icon={faStar} className="bread-star" />
            <FontAwesomeIcon icon={faStar} className="bread-star" />
            <FontAwesomeIcon icon={faStarHalf} className="bread-star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
