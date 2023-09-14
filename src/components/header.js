import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="pb-3 mb-5 border-bottom">
      <div className="d-flex align-items-center text-body-emphasis text-decoration-none">
        <FontAwesomeIcon
          className="bi me-3 display-6"
          icon={faBoxesStacked}
        />
        <div>
          <Link to="/" className="fs-2 m-0 fw-bold text-decoration-none text-light">Inventory Tracking Application</Link>
          <p className="fs-6 m -0">
            Created by Raghav Goel, Radha Agrawal, Ankit Bansal and Rishab Jain
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
