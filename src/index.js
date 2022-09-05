import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById("app"));

const theme = extendTheme({
  colors: {
    brand: {
      500: "#29b6f6"
    },
  },
})


root.render(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
);