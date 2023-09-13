import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Header from "../components/header";

function Home() {
  return (
    <div class="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <main>
        <h1 class="text-body-emphasis">Keep Track</h1>
        <p class="fs-5 col-md-8">
          Create your account and manage energy products, suppliers, purchases,
          orders, sales and customers. You can create, read, update and delete
          these entities.
        </p>

        <div class="mb-5">
          <Link to="/signup" class="btn btn-primary btn-lg px-4 me-2">
            Sign Up
          </Link>
          <Link to="/login" class="btn btn-outline-primary btn-lg px-4">
            Login
          </Link>
        </div>

        <hr class="col-3 col-md-2 mb-5" />

        <div class="row g-5">
          <div class="col-md-6">
            <h2 class="text-body-emphasis">Entities</h2>
            <ul class="ps-0">
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Suppliers
                </a>
              </li>
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Purchases
                </a>
              </li>
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Sales
                </a>
              </li>
              <li>
                <a
                  class="icon-link mb-1"
                  href=""
                  rel="noopener"
                  target="_blank"
                >
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer class="pt-5 my-5 text-body-secondary border-top">
        Created using .NET Core and React
      </footer>
    </div>
  );
}

export default Home;
