import React from 'react';
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>Example React App</h1>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
