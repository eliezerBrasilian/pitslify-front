import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cores } from "../assets/cores";
import { CustomNav } from "../components/CustomNav";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { Zindex } from "../enums/Zindex";
import { Rotas } from "./Rotas";

export function Header() {
  const { updateCurrentNav, currentNav, isVisible, removeVisibility } =
    useCabecalhoContext();

  const location = useLocation();

  useEffect(() => {
    updateCurrentNav(location.pathname);
    if (location.pathname == Rotas.HOME) removeVisibility();
  }, [location, currentNav]);

  const getOut = () => {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: cores.navbarColor,
        height: 100,
        position: "fixed",
        zIndex: Zindex.HEADER,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <NavLink to={Rotas.USER_AREA}>
        {
          <CustomNav
            titulo={"Pitslify"}
            isActive={currentNav == Rotas.USER_AREA}
          />
        }
      </NavLink>

      <div style={{ display: "flex", columnGap: 45, alignItems: "center" }}>
        <NavLink to={Rotas.MY_APPS}>
          {
            <CustomNav
              titulo={"Meus aplicativos"}
              isActive={currentNav.includes(Rotas.MY_APPS)}
            />
          }
        </NavLink>

        <NavLink to={Rotas.HOME} onClick={getOut}>
          {
            <CustomNav
              titulo={"Encerrar sessão"}
              isActive={currentNav == Rotas.REDES_SOCIAIS}
            />
          }
        </NavLink>
      </div>
    </div>
  );
}
