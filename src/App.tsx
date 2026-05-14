import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const clearAuth = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    } catch (err) {
      console.error("ClearAuth error:", err);
    }
    setToken(null);
    setUser(null);
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
