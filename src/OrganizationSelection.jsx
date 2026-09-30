import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrganizationSelection.css";

function OrganizationSelection() {
  const navigate = useNavigate();

  const [organization, setOrganization] = useState("");

  const organizations = [
    "ABC College",
    "XYZ Company",
    "PQR Institute",
    "Sunrise Academy",
  ];

  const handleContinue = () => {
    if (!organization) {
      alert("Please select an organization");
      return;
    }

    navigate(
      `/portal?organization=${encodeURIComponent(organization)}`
    );
  };

  return (
    <div className="flow-page organization-page">

      {/* Decorative background */}
      <div className="flow-orb flow-orb-one"></div>
      <div className="flow-orb flow-orb-two"></div>
      <div className="flow-grid"></div>

      <main className="flow-container">

        {/* STEP */}

        <div className="flow-step">
          STEP 1 OF 3
        </div>

        <h1>
          Choose Organization
        </h1>

        <p className="flow-subtitle">
          Select your organization to continue
        </p>


        {/* ORGANIZATION CARD */}

        <div className="selection-card">

          <div className="selection-card-header">

            <div className="selection-icon">
              🏢
            </div>

            <div>
              <h2>
                Select Organization
              </h2>

              <p>
                Choose the organization you belong to
              </p>
            </div>

          </div>


          {/* SELECT */}

          <label className="selection-label">
            Organization
          </label>

          <select
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="modern-select"
          >

            <option value="">
              Select Organization
            </option>

            {organizations.map((org) => (
              <option
                key={org}
                value={org}
              >
                {org}
              </option>
            ))}

          </select>


          {/* ORGANIZATION LIST */}

          <div className="organization-list">

            <p className="list-title">
              Available Organizations
            </p>

            {organizations.map((org, index) => (

              <button
                key={org}
                className={`organization-option ${
                  organization === org ? "selected" : ""
                }`}
                onClick={() => setOrganization(org)}
              >

                <span className="org-number">
                  0{index + 1}
                </span>

                <span>
                  {org}
                </span>

                <span className="org-arrow">
                  →
                </span>

              </button>

            ))}

          </div>


          {/* CONTINUE */}

          <button
            className="flow-continue"
            onClick={handleContinue}
          >

            Continue to Role

            <span>
              →
            </span>

          </button>

        </div>


        {/* PROGRESS */}

        <div className="progress-wrapper">

          <div className="progress-item active">
            <span>1</span>
            Organization
          </div>

          <div className="progress-line"></div>

          <div className="progress-item">
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

export default OrganizationSelection;