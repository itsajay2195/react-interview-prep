import { CONFIG } from "./Config";

export const initializeFormState = () => {
  const state = {};
  CONFIG.forEach((tab) => {
    tab.children.forEach((field) => {
      state[field.fieldName] = "";
    });
  });
  return state;
};
