import React from "react";
import Header from "./notes/Nav";
import Home from "./notes/Home";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Notes({ setIsLogin }) {
  return (
    <Router>
      <div className="notes-page">
        <Header setIsLogin={setIsLogin} />
        <section>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/create" element={<CreateNote></CreateNote>} />
            <Route path="/edit/:id" element={<EditNote></EditNote>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
