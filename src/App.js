import React from "react";
import Navbar from "./components/Navbar";
import Separate from "./components/Separate";
import data from "./data";
import "./style.css";

export default function App() {
  const separates = data.map((item) => {
    return <Separate {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="separate--list">{separates}</section>
    </div>
  );
}
