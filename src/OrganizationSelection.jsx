import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrganizationSelection.css";

function OrganizationSelection() {
  const [organization, setOrganization] = useState("");
  const navigate = useNavigate();

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
    <div className="organization-page">

      {/* HEADER */}
      <div className="organization-header">

        <div className="step-label">
          STEP 1 OF 3
        </div>

        <h1>Choose Organization</h1>

        <p>
          Select your organization to continue
        </p>

      </div>


      {/* CARD */}
      <div className="organization-card">

        <h2>
          Select Organization
        </h2>


        {/* DROPDOWN */}
        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value="">
            Select Organization
          </option>

          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>


        {/* ORGANIZATION LIST */}
        <div className="organization-list">

          {organizations.map((org) => (
            <div
              key={org}
              className={`organization-item ${
                organization === org ? "selected" : ""
              }`}
              onClick={() => setOrganization(org)}
            >
              {org}
            </div>
          ))}

        </div>


        {/* CONTINUE BUTTON */}
        <button
          className="continue-btn"
          onClick={handleContinue}
        >
          Continue to Role →
        </button>

      </div>

    </div>
  );
}

export default OrganizationSelection;