import { useState } from "react";
<<<<<<< Updated upstream
import { Link, useNavigate, useSearchParams } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> Stashed changes
import "./PortalSelection.css";

function PortalSelection() {
  const [portal, setPortal] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const organization = searchParams.get("organization");

  const roles = [
    "Admin",
    "User",
  ];

  const handleContinue = () => {
    if (!portal) {
      alert("Please select a role");
      return;
    }

    navigate(
      `/login?organization=${encodeURIComponent(
        organization || ""
      )}&role=${encodeURIComponent(portal)}`
    );
  };

  return (
    <div className="portal-selection-page">

      {/* HEADER */}
      <div className="portal-header">

        <div className="step-title">
          STEP 2 OF 3
        </div>

        <h1>
          Choose Your Role
        </h1>

        <p className="step-subtitle">
          Select your role to continue
        </p>

      </div>


      {/* CARD */}
      <div className="portal-selection-card">

        <h2>
          Select Role
        </h2>


        {/* DROPDOWN */}
        <select
          id="portal"
          value={portal}
          onChange={(e) => setPortal(e.target.value)}
        >
          <option value="">
            Select Role
          </option>

          {roles.map((role) => (
            <option
              key={role}
              value={role.toLowerCase()}
            >
              {role}
            </option>
          ))}
        </select>


        {/* ROLE LIST */}
        <div className="role-list">

          {roles.map((role) => (
            <div
              key={role}
              className={`role-item ${
                portal === role.toLowerCase()
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setPortal(role.toLowerCase())
              }
            >
              {role}
            </div>
          ))}

        </div>


        {/* CONTINUE */}
        <button
          className="continue-button"
          onClick={handleContinue}
        >
          Continue to Login →
        </button>

      </div>


      {/* BACK */}
      <Link
        to={`/organization`}
        className="back-link"
      >
        ← Back to Organization
      </Link>

    </div>
  );
}

export default PortalSelection;