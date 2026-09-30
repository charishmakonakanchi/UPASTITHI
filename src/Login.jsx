import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {

  const [searchParams] = useSearchParams();

  const organization =
    searchParams.get("organization") || "Organization";

  const role =
    searchParams.get("role") || "user";


  const [mode, setMode] = useState("login");

  const [showPassword, setShowPassword] =
    useState(false);


  const roleName =
    role === "admin"
      ? "Administrator"
      : "User";


  return (
    <div className="login-page">

      {/* BACKGROUND */}

      <div className="login-orb login-orb-one"></div>
      <div className="login-orb login-orb-two"></div>


      {/* HEADER */}

      <header className="login-navbar">

        <Link
          to="/"
          className="login-brand"
        >

          <div className="login-logo">
            U
          </div>

          <div>
            <h2>
              Upasthiti
            </h2>

            <p>
              Smart Attendance. Secure Presence.
            </p>
          </div>

        </Link>


        <Link
          to="/"
          className="home-link"
        >
          ← Home
        </Link>

      </header>


      {/* MAIN */}

      <main className="login-main">


        {/* LEFT SIDE */}

        <div className="login-info">

          <div className="login-step">
            STEP 3 OF 3
          </div>

          <h1>
            Welcome
            <br />
            <span>back.</span>
          </h1>

          <p>
            Sign in to access your personalized
            Upasthiti dashboard and manage your
            attendance securely.
          </p>


          <div className="login-summary">

            <div className="summary-item">

              <span className="summary-icon">
                🏢
              </span>

              <div>
                <small>
                  Organization
                </small>

                <strong>
                  {organization}
                </strong>
              </div>

            </div>


            <div className="summary-item">

              <span className="summary-icon purple-summary">
                👤
              </span>

              <div>
                <small>
                  Role
                </small>

                <strong>
                  {roleName}
                </strong>
              </div>

            </div>

          </div>


          <div className="security-note">

            <span>
              🔒
            </span>

            <div>

              <strong>
                Secure Access
              </strong>

              <p>
                Your credentials are protected
                and securely handled.
              </p>

            </div>

          </div>

        </div>


        {/* LOGIN CARD */}

        <div className="login-card">


          {/* CARD HEADER */}

          <div className="login-card-header">

            <div className="login-card-icon">
              🔐
            </div>

            <div>

              <h2>
                {mode === "login"
                  ? "Login"
                  : "Create Account"}
              </h2>

              <p>
                {mode === "login"
                  ? "Enter your credentials to continue"
                  : "Register for your Upasthiti account"}
              </p>

            </div>

          </div>


          {/* TABS */}

          <div className="login-tabs">

            <button
              className={
                mode === "login"
                  ? "active"
                  : ""
              }
              onClick={() => setMode("login")}
            >
              Login
            </button>

            <button
              className={
                mode === "register"
                  ? "active"
                  : ""
              }
              onClick={() => setMode("register")}
            >
              Register
            </button>

          </div>


          {/* FORM */}

          {mode === "login" ? (

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Login functionality can be connected to your backend.");
              }}
            >

              {/* ID */}

              <div className="login-input-group">

                <label>
                  ID / Username
                </label>

                <div className="input-wrapper">

                  <span>
                    👤
                  </span>

                  <input
                    type="text"
                    placeholder="Enter your ID or username"
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div className="login-input-group">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <span>
                    🔒
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

              </div>


              {/* OPTIONS */}

              <div className="login-options">

                <label className="remember">

                  <input
                    type="checkbox"
                  />

                  <span>
                    Remember me
                  </span>

                </label>

                <button
                  type="button"
                  className="forgot-button"
                >
                  Forgot Password?
                </button>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="login-submit"
              >
                Login
                <span>
                  →
                </span>
              </button>


              <p className="bottom-text">

                Don't have an account?

                <button
                  type="button"
                  onClick={() =>
                    setMode("register")
                  }
                >
                  Register
                </button>

              </p>

            </form>

          ) : (

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Registration functionality can be connected to your backend.");
              }}
            >

              <div className="login-input-group">

                <label>
                  Full Name
                </label>

                <div className="input-wrapper">

                  <span>
                    👤
                  </span>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />

                </div>

              </div>


              <div className="login-input-group">

                <label>
                  ID / Username
                </label>

                <div className="input-wrapper">

                  <span>
                    #
                  </span>

                  <input
                    type="text"
                    placeholder="Create your ID"
                    required
                  />

                </div>

              </div>


              <div className="login-input-group">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <span>
                    🔒
                  </span>

                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                  />

                </div>

              </div>


              <button
                type="submit"
                className="login-submit"
              >
                Create Account
                <span>
                  →
                </span>
              </button>


              <p className="bottom-text">

                Already have an account?

                <button
                  type="button"
                  onClick={() =>
                    setMode("login")
                  }
                >
                  Login
                </button>

              </p>

            </form>

          )}

        </div>

      </main>


      {/* FOOTER */}

      <footer className="login-footer">

        <span>
          © 2026 Upasthiti
        </span>

        <span>
          Smart Attendance. Secure Presence.
        </span>

      </footer>

    </div>
  );
}

export default Login;