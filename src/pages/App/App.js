import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../components/Home/Home";
import AuthPage from "../../components/AuthPage/AuthPage";
import OrderHistoryPage from "../../components/OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(true);

  // {
  //   name: '',
  //   email: '',
  //   password: '',

  // }

  return (
    <main className="App">
      <h1 className="hello">React is amazing.</h1>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/home/new" element={<Home />} />
            <Route path="/home/orders" element={<OrderHistoryPage />} />
            <Route path="/*" element={<Navigate to="/home"/>} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
