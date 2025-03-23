import React from "react";
import { useFormContext } from "../context/FormContext";

const TabsWithForm = () => {
  const { state, dispatch } = useFormContext();
  console.log("state>>>", state);
  return (
    <div>
      <span>TabsWithForm</span>
    </div>
  );
};

export default TabsWithForm;
