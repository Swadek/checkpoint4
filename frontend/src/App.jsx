import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthFunctionProvider } from "./contexts/AuthFunctionContext";
import Home from "./pages/Home";
import AdminAuthentication from "./pages/AdminAuthentication";
import EspaceAdmin from "./pages/EspaceAdmin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <AuthFunctionProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminAuthentication />} />
            <Route path="/espaceadmin" element={<EspaceAdmin />} />
          </Routes>
        </div>
      </Router>
    </AuthFunctionProvider>
  );
}

export default App;
