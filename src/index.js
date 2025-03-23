import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// function App() {
//   return <h1>Hello, Parcel with React!</h1>;
// }

// export default App;

const heading = React.createElement("h1", { id: "heading" }, "Ajay itha");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
