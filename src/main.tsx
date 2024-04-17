import React from "react";
import ReactDOM from "react-dom/client";
import { NotesProvider } from "@/context/NotesContext.js";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
