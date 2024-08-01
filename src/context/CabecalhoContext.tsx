import { ReactNode, createContext, useContext, useState } from "react";
import { Rotas } from "../navigation/Rotas";
import { CabecalhoContextInterface } from "./../types/CabecalhoContextInterface";

const defaultCabecalho = {
  removeVisibility: () => {},
  activateVisibility: () => {},
  isVisible: true,
  currentNav: Rotas.HOME,
  updateCurrentNav(_newNav) {},
} as CabecalhoContextInterface;

const CabecalhoContext = createContext(defaultCabecalho);

export function useCabecalhoContext() {
  return useContext(CabecalhoContext);
}

interface CabecalhoContextProps {
  children: ReactNode;
}

export function CabecalhoContextProvider({ children }: CabecalhoContextProps) {
  const [isVisible, setVisible] = useState(true);
  const [currentNav, setCurrentNav] = useState<string>(Rotas.HOME);

  function updateCurrentNav(newNav: string) {
    setCurrentNav(newNav);
  }

  function removeVisibility() {
    setVisible(false);
  }

  function activateVisibility() {
    setVisible(true);
  }

  return (
    <CabecalhoContext.Provider
      value={{
        removeVisibility,
        activateVisibility,
        currentNav,
        isVisible,
        updateCurrentNav,
      }}
    >
      {children}
    </CabecalhoContext.Provider>
  );
}
