import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PortalSelection.css";

function PortalSelection() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const organization =
    searchParams.get("organization") || "Organization";

  const [role, setRole] = useState("");

  const handleContinue = () => {

    if (!role) {
      alert("Please select your role");
      return;
    }

    navigate(
      `/login?organization=${encodeURIComponent(
        organization
      )}&role=${role}`
    );
  };

  return (
    <div className="flow-page role-page">

      {/* BACKGROUND */}

      <div className="role-orb role-orb-one"></div>
      <div className="role-orb role-orb-two"></div>

      <main className="flow-container role-container">

        <div className="flow-step">
          STEP 2 OF 3
        </div>

        <h1>
          Choose Your Role
        </h1>

        <p className="flow-subtitle">
          Select your role to continue
        </p>


        {/* ORGANIZATION BADGE */}

        <div className="selected-organization">

          <span>
            Organization
          </span>

          <strong>
            {organization}
          </strong>

        </div>


        {/* ROLE CARD */}

        <div className="role-selection-card">

          <div className="role-header">

            <div className="role-main-icon">
              👤
            </div>

            <div>
              <h2>
                Select Your Role
              </h2>

              <p>
                Choose how you want to access Upasthiti
              </p>
            </div>

          </div>


          {/* ROLE OPTIONS */}

          <div className="role-options">


            {/* ADMIN */}

            <button
              className={`role-option ${
                role === "admin"
                  ? "role-selected"
                  : ""
              }`}
              onClick={() => setRole("admin")}
            >

              <div className="role-icon admin-icon">
                🛡
              </div>

              <div className="role-text">

                <h3>
                  Administrator
                </h3>

                <p>
                  Manage attendance, users, events
                  and organization settings.
                </p>

              </div>

              <div className="role-radio">
                {role === "admin" ? "✓" : ""}
              </div>

            </button>


            {/* USER */}

            <button
              className={`role-option ${
                role === "user"
                  ? "role-selected"
                  : ""
              }`}
              onClick={() => setRole("user")}
            >

              <div className="role-icon user-icon">
                👤
              </div>

              <div className="role-text">

                <h3>
                  User
                </h3>

                <p>
                  View attendance, events and your
                  personal dashboard.
                </p>

              </div>

              <div className="role-radio">
                {role === "user" ? "✓" : ""}
              </div>

            </button>

          </div>


          {/* CONTINUE */}

          <button
            className="flow-continue"
            onClick={handleContinue}
          >

            Continue to Login

            <span>
              →
            </span>

          </button>

        </div>


        {/* PROGRESS */}

        <div className="progress-wrapper">

          <div className="progress-item completed">
            <span>✓</span>
            Organization
          </div>

          <div className="progress-line completed-line"></div>

          <div className="progress-item active">
            <span>2</span>
            Role
          </div>

          <div className="progress-line"></div>

          <div className="progress-item">
            <span>3</span>
            Login
          </div>

        </div>

      </main>

    </div>
  );
}

export default PortalSelection;