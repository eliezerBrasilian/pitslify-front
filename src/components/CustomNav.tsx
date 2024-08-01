import { cores } from "../assets/cores";
import { Linha } from "./Linha";

interface CustomNavProps {
  titulo: string;
  isActive: boolean;
}

export function CustomNav({ titulo, isActive }: CustomNavProps) {
  return (
    <div style={{ flexDirection: "column", cursor: "pointer" }}>
      <p
        style={{
          color: isActive ? cores.azul_claro : "white",
          fontWeight: isActive ? "bolder" : "normal",
        }}
      >
        {titulo}
      </p>

      {isActive && <Linha borderBottomColor={cores.azul_claro} />}
    </div>
  );
}
