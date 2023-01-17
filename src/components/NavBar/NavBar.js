import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ name }) {
  return (
    <nav>
      <Link to="/home/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/home/new">New Order</Link>
      <div className="welcome">Welcome {name}!</div>
    </nav>
  );
}
