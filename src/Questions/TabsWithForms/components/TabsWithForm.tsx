import React, { useCallback, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { CONFIG } from "../Config";
import ItemRenderer from "./ItemRenderer";
import Button from "./Button";

const TabsWithForm = () => {
  const { state, dispatch } = useFormContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const onNextPress = useCallback(() => {
    setCurrentIndex((prev: any) => {
      if (prev + 1 > CONFIG?.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, []);

  const onPrevPress = useCallback(() => {
    setCurrentIndex((prev: any) => {
      if (prev - 1 < 0) {
        return CONFIG?.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, []);

  const handleChange = useCallback((field: any, value: any) => {
    dispatch({ type: "UPDATE_FIELD", field: field, value });
  }, []);

  const validateForm = (formData) => {
    const errors = {};

    CONFIG.forEach((tab) => {
      tab.children.forEach((field) => {
        const { fieldName, properties } = field;
        const { validationRegex, minLength, maxLength } = properties;
        const value = formData[fieldName] || "";

        // Check length
        if (minLength && value.length < minLength) {
          errors[
            fieldName
          ] = `${fieldName} must be at least ${minLength} characters.`;
        } else if (maxLength && value.length > maxLength) {
          errors[
            fieldName
          ] = `${fieldName} must be less than ${maxLength} characters.`;
        }

        // Check regex
        if (validationRegex && value) {
          const regex = new RegExp(validationRegex);
          if (!regex.test(value)) {
            errors[fieldName] = `${fieldName} is invalid.`;
          }
        }
      });
    });

    setErrors(errors);

    return errors;
  };

  return (
    <div style={{ fisplay: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ display: "flex", flex: 1, justifyContent: "space-around" }}>
        {CONFIG?.map((item: any, index: any) => {
          return (
            <div
              key={index?.toString()}
              style={{
                borderBottom:
                  currentIndex === index ? "4px solid white" : "none",
              }}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <span
                style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item?.title}
              </span>
            </div>
          );
        })}
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {CONFIG[currentIndex]?.children?.map((field: any, index: any) => {
          return (
            <div key={index?.toString()}>
              {/* <>{console.log("item>>>>>", field)}</> */}
              <ItemRenderer
                item={field}
                handleChange={handleChange}
                value={state?.[field?.fieldName]}
                error={errors?.[field?.fieldName]}
              />
            </div>
          );
        })}

        <div
          style={{
            display: "flex",
            // flex: 1,
            justifyContent: "center",
            gap: 20,
            margin: 40,
          }}
        >
          <Button
            label="prev"
            style={{ backgroundColor: "dodgerblue", padding: "15px 30px" }}
            onClick={onPrevPress}
          />

          {currentIndex === CONFIG?.length - 1 && (
            <Button
              label="Submit"
              style={{ backgroundColor: "dodgerblue", padding: "15px 30px" }}
              onClick={() => validateForm(state)}
            />
          )}
          <Button
            label="Next"
            style={{ backgroundColor: "dodgerblue", padding: "15px 30px" }}
            onClick={onNextPress}
          />
        </div>
      </div>
    </div>
  );
};

export default TabsWithForm;
