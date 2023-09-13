import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header";

function SignUp() {
  return (
    <div class="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <h2 class="display-6 text-center mb-3">Sign Up</h2>
      <form class="w-50 mx-auto">
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            autoFocus
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-success w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
