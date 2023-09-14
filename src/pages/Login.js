import Header from "../components/Header";

function Login() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <h2 className="display-6 text-center mb-3">Login</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
