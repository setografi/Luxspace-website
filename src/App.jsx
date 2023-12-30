import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/categories/:idc" Component={Details} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
