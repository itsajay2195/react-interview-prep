import React, { useRef, useCallback, useEffect } from "react";
import OtpInputs from "./components/OtpInputs";

const OtpForm = () => {
  const inputRefs = useRef([]);
  const handleChange = useCallback((e, index) => {
    const value = e.target.value?.trim();
    if (value && index < inputRefs.current?.length - 1) {
      inputRefs.current?.[index + 1]?.focus();
    }
  }, []);

  const getValues = useCallback(() => {
    const otp = inputRefs.current.map((input) => input.value).join("");
    console.log("otp>>>>", otp);
    return otp;
  }, []);

  useEffect(() => {
    inputRefs.current?.[0]?.focus();
  }, []);
  return (
    <OtpInputs
      length={4}
      getValues={getValues}
      handleChange={handleChange}
      listRef={inputRefs}
    />
  );
};

export default OtpForm;
