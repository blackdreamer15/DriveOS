import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <AuthProvider>
    <ToastContainer />
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
