import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBox,
  faBoxesStacked,
  faCashRegister,
  faHome,
  faMoneyBill1Wave,
  faTruckLoading,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon className="display-6 mb-1" icon={faBoxesStacked} />
        <Link
          to="/track/dashboard"
          className="link-body-emphasis text-decoration-none display-6"
        >
          Track Inventory
        </Link>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink
            to="/track/dashboard"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faHome} />
            <span className="fs-5">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track/products"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faBox} />
            <span className="fs-5">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track/orders"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faTruckLoading} />
            <span className="fs-5">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track/purchases"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faCashRegister} />
            <span className="fs-5">Purchases</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track/sales"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faMoneyBill1Wave} />
            <span className="fs-5">Sales</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/track/customers"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faUsers} />
            <span className="fs-5">Customers</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/track/suppliers"
            className="nav-link link-body-emphasis d-flex align-items-baseline"
            activeclassname="active"
          >
            <FontAwesomeIcon className="me-3" icon={faAddressBook} />
            <span className="fs-5">Suppliers</span>
          </NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <p className="text-center">
          Logged in as <strong>User Name</strong> (user@email.com)
        </p>
        <button className="btn btn-danger w-100">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
