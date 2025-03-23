import React from "react";
import { FormProvider } from "./context/FormContext";
import TabsWithForm from "./components/TabsWithForm";
import { initializeFormState } from "./utils";

const FormComponent = () => {
  const initialFormState = initializeFormState();
  return (
    <FormProvider initialState={initialFormState}>
      <TabsWithForm />
    </FormProvider>
  );
};

export default FormComponent;
