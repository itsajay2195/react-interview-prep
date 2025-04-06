import React, { useRef, useCallback, useEffect } from "react";

const OtpInputs = ({ length, getValues, handleChange, listRef }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        {Array.from({ length })?.map((item: any, index: number) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            ref={(ref) => (listRef.current[index] = ref)}
            style={{
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "24px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        ))}
      </div>

      <button
        onClick={getValues}
        style={{ padding: 10, backgroundColor: "red", width: "20%" }}
      >
        Get values
      </button>
    </div>
  );
};

export default OtpInputs;
