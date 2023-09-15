import { useContext, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { ToastContext } from "../services/ToastService";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!(email.trim() && password.trim())) {
      addToast("Please enter your email and password both.", "danger");
      return;
    }

    // Create a data object with the form input values
    const data = {
      Email: email,
      Password: password,
    };

    try {
      // Send a POST request
      const response = await axios.post('http://localhost:5195/api/Token/Login', data);

      if (response.status === 200) {
        // Successful login
        console.log('Login successful');
        addToast("Login successful", "success");
        navigate('/track');
      } else {
        console.error('Login failed');
        addToast("Login failed", "danger");
      }
    } catch (error) {
      // Handle network or request errors
      console.error('An error occurred:', error);
      addToast("An error occurred", "danger");
    }
  };

  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Header />
      <h2 className="display-6 text-center mb-3">Login</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
