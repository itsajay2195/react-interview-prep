import React from "react";

const ShortText = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder = "",
  maxLength,
  minLength,
  options,
  handleChange,
}) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default ShortText;
