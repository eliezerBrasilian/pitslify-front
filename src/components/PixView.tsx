import { cores } from "../assets/cores";
import { AppUtils } from "../utils/AppUtils";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copyIcon from "../assets/copy.png";
import pixIcon from "../assets/pix_comfundo.png";

export interface PixViewProps {
  selecionado?: boolean;
  onClick: () => void;
  chavePix: string;
}

export function PixView(props: PixViewProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ToastContainer />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          columnGap: 20,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          overflow: "hidden",
          border: "1px solid gray",
          backgroundColor: "white",
          borderRadius: 10,
          borderColor: props.selecionado ? cores.btn_vermelho : "gray",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <img src={pixIcon} height={23} width={23} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
          onClick={props.onClick}
        >
          <p style={{ color: "black", margin: 0 }}>
            {AppUtils.truncateText(props.chavePix, 20)}
          </p>
          <img src={copyIcon} height={20} width={20} />
        </div>
      </div>
    </div>
  );
}
