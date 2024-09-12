import React, { useEffect } from "react";
import "./i18n";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event from "./pages/Event/Event";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Event />} />
      </Routes>
    </Router>
  );
}


export default App;
