import { Link, useLocation } from "react-router-dom";
import logo from "./assets/upasthiti-logo.jpeg";
import "./App.css";

function Login() {

  const location = useLocation();

  const portal = location.state?.portal || "user";

  return (
    <div className="login-page">

      {/* HEADER */}
      <header className="navbar">

        <div className="brand">

          <img
            src={logo}
            alt="Upasthiti Logo"
          />

          <div>
            <h2>Upasthiti</h2>
            <p>Smart Attendance. Secure Presence.</p>
          </div>

        </div>

        <nav>
          <Link to="/">Home</Link>
        </nav>

      </header>


      {/* LOGIN CARD */}
      <main className="login-container">

        <div className="login-card">

          <p className="step-number">
            STEP 3 OF 3
          </p>

          <h1>
            LOGIN / REGISTER
          </h1>

          <p className="login-subtitle">
            Login or create your account
          </p>


          {/* TABS */}
          <div className="login-tabs">

            <button className="active">
              Login
            </button>

            <button>
              Register
            </button>

          </div>


          {/* ID */}
          <div className="input-group">

            <label>
              ID / Username
            </label>

            <input
              type="text"
              placeholder="Enter ID or username"
            />

          </div>


          {/* PASSWORD */}
          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
            />

          </div>


          {/* OPTIONS */}
          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>


          {/* LOGIN */}
          <button
            className="login-submit"
            onClick={() => {
              alert(
                `Login successful for ${portal} portal`
              );
            }}
          >
            Login
          </button>


          <p className="register-text">
            Don't have an account?
            <button>
              Register
            </button>
          </p>

        </div>

      </main>

    </div>
  );
}

export default Login;