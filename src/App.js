import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OtpForm from "./Questions/OTP/OtpForm";
import FormComponent from "./Questions/TabsWithForms/FormComponent";

function App() {
  return (
    <div className="app">
      {/* <FormComponent /> */}
      <OtpForm />
    </div>
  );
}

export default App;
