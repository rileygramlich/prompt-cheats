import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from '../../utilities/users-service';

import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import Number from "../../components/Number/Number";

export default function App() {
  const [user, setUser] = useState(getUser());
  const name = user.name

  return (
    <main className="App">
      <h1 className="hello">React is amazing.</h1>
      {user ? (
        <>
          <NavBar name={name}/>
          <Routes>
            <Route path="/home/new" element={<Home />} />
            <Route path="/home/orders" element={<OrderHistoryPage />} />
            <Route path="/:num" element={<Number />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
