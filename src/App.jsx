import React, { useEffect } from "react";
import "./i18n";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event from "./pages/Event/Event";
import EventDetails from "./pages/EventDetails/EventDetails";
import Profile from "./pages/Profile/Main/Profile"; // Add the ProfileDetails component
import Login from "./pages/Auth/Login/Login";
import ForgotPassword from "./pages/Auth/Forgotpassword/Forgot";
import CheckEmail from "./pages/Auth/CheckEmail/CheckEmail";
// import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import PasswordResetSuccess from "./pages/Auth/PasswordResetSuccess/PasswordResetSuccess";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} /> {/* Add this line */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
        <Route path="/passwordresetsuccess" element={<PasswordResetSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;