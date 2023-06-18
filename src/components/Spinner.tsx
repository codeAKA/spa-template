import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Spinner.css";

const Spinner = (): JSX.Element => (
  <div className="spinner-container">
    <FontAwesomeIcon className="spinner" icon={faSpinner} />
  </div>
);

export default Spinner;
