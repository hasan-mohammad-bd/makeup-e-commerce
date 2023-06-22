"use client";
import { Provider } from "react-redux";
import store from "@/store";
import { ToastContainer } from "react-toastify";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
};

export default ReduxProvider;
