// src/App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routes-config";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
};

export default App;
