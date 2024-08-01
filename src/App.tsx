import "./App.css";

import { CabecalhoContextProvider } from "./context/CabecalhoContext";
import { RoutesApp } from "./navigation/Routes";
function App() {
  return (
    <CabecalhoContextProvider>
      <RoutesApp />
    </CabecalhoContextProvider>
  );
}

export default App;
