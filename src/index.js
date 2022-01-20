import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./Redux/store";
import { AppContextProvider } from "./Redux/AppContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>,
  rootElement
);
