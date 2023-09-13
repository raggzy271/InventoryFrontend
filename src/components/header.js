import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="pb-3 mb-5 border-bottom">
      <div class="d-flex align-items-center text-body-emphasis text-decoration-none">
        <FontAwesomeIcon
          class="bi me-3"
          width="40"
          height="32"
          icon={faBoxesStacked}
        />
        <div>
          <Link to="/" class="fs-2 m-0 fw-bold text-decoration-none text-light">Inventory Tracking Application</Link>
          <p class="fs-6 m -0">
            Created by Raghav Goel, Radha Agrawal, Ankit Bansal and Rishab Jain
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
