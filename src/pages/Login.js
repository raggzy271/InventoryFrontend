import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header";

function Login() {
  return (
    <div class="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <h2 class="display-6 text-center mb-3">Login</h2>
      <form class="w-50 mx-auto">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            required
            autoFocus
          />
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
