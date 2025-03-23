export const CONFIG = [
  {
    title: "Personal Information",
    type: "TAB_HEADER",
    children: [
      {
        fieldName: "UserName",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: "^[a-zA-Z0-9_]{4,40}$",
          type: "text",
          maxLength: 40,
          minLength: 4,
        },
        description: "Enter your username (4-40 alphanumeric characters)",
      },
      {
        fieldName: "Email",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: "^[^s@]+@[^s@]+.[^s@]+$",
          type: "email",
          maxLength: 40,
          minLength: 4,
        },
        description: "Enter a valid email address",
      },
      {
        fieldName: "Password",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
          type: "password",
          maxLength: 40,
          minLength: 8,
        },
        description:
          "Password must be at least 8 characters, include letters and numbers",
      },
      {
        fieldName: "Confirm Password",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: "",
          type: "password",
          maxLength: 40,
          minLength: 8,
        },
        description: "Confirm your password",
      },
    ],
  },
  {
    title: "Preferences",
    type: "TAB_HEADER",
    children: [
      {
        fieldName: "Favorite Hobby",
        fieldType: "DROPDOWN",
        properties: {
          validationRegex: "",
          type: "text",
          options: [
            { id: 1, value: "Reading" },
            { id: 2, value: "Traveling" },
            { id: 3, value: "Gaming" },
          ],
        },
        description: "Select your favorite hobby",
      },
      {
        fieldName: "Secondary Hobby",
        fieldType: "DROPDOWN",
        properties: {
          validationRegex: "",
          type: "text",
          options: [
            { id: 1, value: "Cooking" },
            { id: 2, value: "Music" },
            { id: 3, value: "Sports" },
          ],
        },
        description: "Select your secondary hobby",
      },
    ],
  },
  {
    title: "Security",
    type: "TAB_HEADER",
    children: [
      {
        fieldName: "Security Question",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: ".{10,100}",
          type: "text",
          maxLength: 100,
          minLength: 10,
        },
        description: "Enter a security question (10-100 characters)",
      },
      {
        fieldName: "Security Answer",
        fieldType: "SHORT_TEXT",
        properties: {
          validationRegex: ".{1,50}",
          type: "text",
          maxLength: 50,
          minLength: 1,
        },
        description: "Enter the answer to your security question",
      },
    ],
  },
];
