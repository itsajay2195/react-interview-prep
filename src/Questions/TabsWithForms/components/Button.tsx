import React from "react";
import "../css/Button.css"; // Import CSS for styling

function Button({ label, onClick, type = "button", style, disabled = false }) {
  return (
    <button
      type={type}
      className="custom-button"
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
