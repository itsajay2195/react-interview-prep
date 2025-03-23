import React from "react";

const DropDown = ({
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
      <select name={name} value={value} onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options?.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default DropDown;
