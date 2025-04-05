import React from "react";
import ShortText from "./ShortText";
import DropDown from "./DropDown";

const ItemRenderer = ({ item, handleChange, value, error }) => {
  if (item?.fieldType === "SHORT_TEXT") {
    return (
      <ShortText
        label={item?.fieldName}
        name={item?.fieldName}
        type={item?.properties?.type}
        value={value}
        handleChange={handleChange}
        error={error}
      />
    );
  } else if (item?.fieldType === "DROPDOWN") {
    return (
      <DropDown
        label={item?.fieldName}
        name={item?.fieldName}
        type={item?.properties?.type}
        value={value}
        handleChange={handleChange}
        options={item?.properties?.options}
        error={error}
      />
    );
  }
};

export default ItemRenderer;
