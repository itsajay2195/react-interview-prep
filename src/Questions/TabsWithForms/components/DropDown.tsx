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
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange?: any;
  error?: any;
  placeholder?: string;
  maxLength?: any;
  minLength?: any;
  options?: any;
  handleChange?: any;
}) => {
  return (
    <div
      className="input-field "
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "40%",
        margin: 20,
      }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        value={value}
        onChange={(e) => handleChange?.(e.target.name, e.target.value)}
        style={{ padding: 10 }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options?.map((option) => (
          <option key={option.id} value={option.value} style={{ padding: 20 }}>
            {option.value}
          </option>
        ))}
      </select>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default DropDown;
