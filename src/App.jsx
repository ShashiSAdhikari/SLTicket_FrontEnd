import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./i18n";
import Login from "./pages/Auth/Login/Login";
import PersonalDetails from "./pages/Auth/profile/personal/PersonalDetails"; // Import PersonalDetails component
import Security from "./pages/Auth/profile/Security/Security";
import Register from "./pages/Auth/Register/Register";
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail";
import Event from "./pages/Event/Event";

// import ForgotPassword from "./pages/Auth/Forgotpassword/Forgot";
// import CheckEmail from "./pages/Auth/CheckEmail/CheckEmail";
// import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
// import PasswordResetSuccess from "./pages/Auth/PasswordResetSuccess/PasswordResetSuccess";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Change the language based on the user's browser setting
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <Router>
      <Routes>
        {/* Default route: directs to Event page */}
        <Route path="/" element={<Event />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Register route */}
        <Route path="/register" element={<Register />} />

        {/* Route for PersonalDetails */}
        <Route path="/personal-details" element={<PersonalDetails />} />

        <Route path="/security" element={<Security />} />

        <Route path="/verify" element={<VerifyEmail></VerifyEmail>}></Route>

        {/* Uncomment these routes when their respective components are ready */}
        {/* 
        <Route path="/checkemail" element={<CheckEmail />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/passwordresetsuccess" element={<PasswordResetSuccess />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
