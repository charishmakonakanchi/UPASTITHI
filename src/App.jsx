import { Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import PortalSelection from "./PortalSelection.jsx";
import Organization from "./OrganizationSelection.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/portal" element={<PortalSelection />} />

      <Route path="/organization" element={<Organization />} />

      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;