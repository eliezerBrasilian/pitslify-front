import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cores } from "../assets/cores";
import { CustomNav } from "../components/CustomNav";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import { ProjectTag } from "../enums/ProjectTag";
import { Zindex } from "../enums/Zindex";
import { Rotas } from "./Rotas";

export function Header() {
  const { updateCurrentNav, currentNav, isVisible, removeVisibility } =
    useCabecalhoContext();
  const [popupVisible, setPopUpVisible] = useState(false);

  const [prevMousePos, setPrevMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    setPrevMousePos({ x: ev.clientX, y: ev.clientY });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    const currentMousePos = { x: ev.clientX, y: ev.clientY };
    const direction = getMouseDirection(prevMousePos, currentMousePos);

    switch (direction) {
      case "down":
        turnPopUpVisisibleOn();
        break;

      default:
        turnPopUpVisisibleOff();
    }

    if (ev.clientY > prevMousePos.y) {
      turnPopUpVisisibleOn();
    }
  };

  const getMouseDirection = (
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) => {
    const deltaX = currentPos.x - prevPos.x;
    const deltaY = currentPos.y - prevPos.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        return "right";
      } else {
        return "left";
      }
    } else {
      if (deltaY > 0) {
        return "down";
      } else {
        return "up";
      }
    }
  };

  const location = useLocation();

  useEffect(() => {
    updateCurrentNav(location.pathname);
    if (location.pathname == Rotas.HOME) removeVisibility();
  }, [location, currentNav]);

  const turnPopUpVisisibleOn = () => {
    setPopUpVisible(true);
  };
  const turnPopUpVisisibleOff = () => {
    setPopUpVisible(false);
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
      <NavLink to={"/"}>
        {<CustomNav titulo={"Pitslify"} isActive={currentNav == Rotas.HOME} />}
      </NavLink>

      <div
        style={{ display: "flex", columnGap: 45, alignItems: "center" }}
        onMouseUp={turnPopUpVisisibleOff}
      >
        <div
          onMouseEnter={turnPopUpVisisibleOn}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setPopUpVisible(!popupVisible);
          }}
        >
          {
            <CustomNav
              titulo={"Meus aplicativos"}
              isActive={currentNav.includes(Rotas.PROJETOS)}
            />
          }
        </div>
        <NavLink to={Rotas.REDES_SOCIAIS}>
          {
            <CustomNav
              titulo={"Discord e afins"}
              isActive={currentNav == Rotas.REDES_SOCIAIS}
            />
          }
        </NavLink>
      </div>
      {popupVisible && (
        <PopUpSelectProject turnPopUpVisisibleOff={turnPopUpVisisibleOff} />
      )}
    </div>
  );
}

interface PopUpSelectProjectProps {
  turnPopUpVisisibleOff: () => void;
}

function PopUpSelectProject({
  turnPopUpVisisibleOff,
}: PopUpSelectProjectProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        right: 45,
        backgroundColor: "#252323",
        height: 200,
        width: 200,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
      }}
      onMouseLeave={turnPopUpVisisibleOff}
    >
      <PopUpSelectProjectItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Aplicativos"
        tag={ProjectTag.APP}
      />
      <PopUpSelectProjectItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Sites"
        tag={ProjectTag.SITE}
      />
      <PopUpSelectProjectItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="APIs"
        tag={ProjectTag.API}
      />
      <PopUpSelectProjectItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Bibliotecas Android"
        tag={ProjectTag.LIB}
      />
    </div>
  );
}

interface PopUpSelectProjectItemProps {
  text: string;
  tag: string;
  turnPopUpVisisibleOff: () => void;
}
function PopUpSelectProjectItem({
  text,
  tag,
  turnPopUpVisisibleOff,
}: PopUpSelectProjectItemProps) {
  const [currentColor, setCurrentColor] = useState("#fff");
  return (
    <NavLink to={Rotas.PROJETOS + "/" + tag} onClick={turnPopUpVisisibleOff}>
      <p
        style={{ color: currentColor, cursor: "pointer" }}
        onMouseEnter={() => {
          setCurrentColor("yellow");
        }}
        onMouseLeave={() => {
          setCurrentColor("#fff");
        }}
      >
        {text}
      </p>
    </NavLink>
  );
}
