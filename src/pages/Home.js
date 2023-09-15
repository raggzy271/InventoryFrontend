import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <main>
        <h1 className="text-body-emphasis">Keep Track</h1>
        <p className="fs-5 col-md-8">
          Manage energy products, suppliers, purchases,
          orders, sales and customers. You can create, read, update and delete
          these entities.
        </p>

        <div className="mb-5">
          {/* <Link to="/signup" className="btn btn-primary btn-lg px-4 me-2">
            Sign Up
          </Link> */}
          <Link to="/login" className="btn btn-outline-primary btn-lg px-4">
            Login
          </Link>
        </div>
      </main>
      <footer className="pt-5 my-5 text-body-secondary border-top">
        Created using .NET Core and React
      </footer>
    </div>
  );
}

export default Home;
