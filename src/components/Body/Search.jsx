import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [result, setResult] = useState(false);
  const [country, setCountry] = useState("");
  const inputRef = useRef();

  const fetchApi = async (event) => {
    event.preventDefault();

    if (inputRef.current.value === "") {
      return;
    }

    if (inputRef.current.value) {
      const respons = await fetch(
        `https://restcountries.com/v3.1/capital/${inputRef.current.value}`
      );
      const data = await respons.json();

      console.log(data[0].name.common);
      if (data) {
        setCountry(data[0].name.common);
      }
    }
    setResult((pre) => !pre);
  };

  const close = () => {
    inputRef.current.value = "";
    setResult((pre) => !pre);
    setCountry("");
  };

  return (
    <div className="search-container">
      <p className="search-ask">
        Ask me- e.g: GreAI/What the best way to looks like symphatics
      </p>
      <form onSubmit={fetchApi}>
        <input type="text" placeholder="GreAI/" ref={inputRef} />
      </form>
      <span className="search-icon">
        {result ? (
          <FontAwesomeIcon icon={faClose} onClick={close} />
        ) : (
          <FontAwesomeIcon icon={faSearch} onClick={fetchApi} />
        )}
      </span>

      <div className="search-result">
        {result && (
          <div className="scrollbar-container">
            <div className="scroll-content">
              <p>
                I hope this message finds you well. I am writing to express my
                continued interest in the [position name] and to inquire about
                the status of my application. I am enthusiastic about the
                prospect of contributing to [Company Name] and am eager to learn
                more about the next steps in the hiring process. I appreciate
                the time and consideration that has already been extended to my
                application. Could you please provide an update on the status of
                my interview? I am eager to further discuss my qualifications
                and how they align with the needs of the team. Thank you for
                your time and consideration. I look forward to the possibility
                of contributing to [Company Name].I hope this message finds you
                well. I am writing to express my continued interest in the
                [position name] and to inquire about the status of my
                application. I am enthusiastic about the prospect of
                contributing to [Company Name] and am eager to learn more about
                the next steps in the hiring process. I appreciate the time and
                consideration that has already been extended to my application.
                Could you please provide an update on the status of my
                interview? I am eager to further discuss my qualifications and
                how they align with the needs of the team. Thank you for your
                time and consideration. I look forward to the possibility of
                contributing to [Company Name].I hope this message finds you
                well. I am writing to express my continued interest in the
                [position name] and to inquire about the status of my
                application. I am enthusiastic about the prospect of
                contributing to [Company Name] and am eager to learn more about
                the next steps in the hiring process. I appreciate the time and
                consideration that has already been extended to my application.
                Could you please provide an update on the status of my
                interview? I am eager to further discuss my qualifications and
                how they align with the needs of the team. Thank you for your
                time and consideration. I look forward to the possibility of
                contributing to [Company Name].I hope this message finds you
                well. I am writing to express my continued interest in the
                [position name] and to inquire about the status of my
                application. I am enthusiastic about the prospect of
                contributing to [Company Name] and am eager to learn more about
                the next steps in the hiring process. I appreciate the time and
                consideration that has already been extended to my application.
                Could you please provide an update on the status of my
                interview? I am eager to further discuss my qualifications and
                how they align with the needs of the team. Thank you for your
                time and consideration. I look forward to the possibility of
                contributing to [Company Name].
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
