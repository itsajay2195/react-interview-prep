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
      className="input-field"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "40%",
        margin: 20,
      }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        style={{ height: 40, borderRadius: 10 }}
        onChange={(e) => handleChange?.(e.target.name, e.target.value)}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default ShortText;
