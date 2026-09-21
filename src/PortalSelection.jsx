import { Link, useState } from "react";
import "./PortalSelection.css";

function PortalSelection() {
  const [portal, setPortal] = useState("");

  return (
    <div className="portal-selection-page">

      <div className="step-title">2. CHOOSE PORTAL</div>

      <p className="step-subtitle">
        Select your portal to continue
      </p>

      <div className="portal-selection-card">

        <label htmlFor="portal">
          Select Portal
        </label>

        <select
          id="portal"
          value={portal}
          onChange={(e) => setPortal(e.target.value)}
        >
          <option value="">Select Portal</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {portal && (
          <Link
            to={`/organization?role=${portal}`}
            className="continue-button"
          >
            Continue →
          </Link>
        )}

      </div>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

    </div>
  );
}

export default PortalSelection;