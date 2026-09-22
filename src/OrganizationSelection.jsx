import { Link, useLocation } from "react-router-dom";
import logo from "./assets/upasthiti-logo.jpeg";
import "./App.css";

function Organization() {

  const location = useLocation();

  const portal = location.state?.portal || "user";

  return (
    <div className="flow-page">

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


      {/* ORGANIZATION */}
      <main className="flow-container">

        <p className="step-number">
          STEP 2 OF 3
        </p>

        <h1>Choose Organization</h1>

        <p className="flow-subtitle">
          Select your organization to continue
        </p>


        <div className="organization-box">

          <label>
            Select Organization
          </label>

          <select>

            <option>
              Select Organization
            </option>

            <option>
              ABC College
            </option>

            <option>
              XYZ Company
            </option>

            <option>
              PQR Institute
            </option>

            <option>
              Sunrise Academy
            </option>

          </select>


          <div className="organization-list">

            <div>ABC College</div>
            <div>XYZ Company</div>
            <div>PQR Institute</div>
            <div>Sunrise Academy</div>

          </div>


          <Link
            to="/login"
            state={{ portal: portal }}
            className="continue-btn"
          >
            Continue to Login →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Organization;
