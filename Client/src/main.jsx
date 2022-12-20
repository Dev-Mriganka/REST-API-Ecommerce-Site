import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {AppContextProvider} from "./Components/AppContext/AppContext";
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ChakraProvider>
  </BrowserRouter>
 
);
