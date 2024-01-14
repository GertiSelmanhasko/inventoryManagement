import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { AppContextProvider } from "./context/AppContext.js";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
