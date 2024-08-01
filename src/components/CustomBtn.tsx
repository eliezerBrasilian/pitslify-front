import { cores } from "../assets/cores";

interface BtnProps {
  text: string;
  textColor?: string;
  width?: string;
  backgroundColor?: string;
  icon?: string;
  padding?: string | number;
  onClick?: () => void;
}
export function CustomBtn({
  text,
  textColor = "#fff",
  width = "fit-content",
  backgroundColor = cores.btn_vermelho,
  icon,
  padding = 15,
  onClick = () => {},
}: BtnProps) {
  if (icon != undefined) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor,
          border: "none",
          borderRadius: 10,
          padding: padding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 5,
          width: width,
          color: textColor,
          cursor: "pointer",
        }}
      >
        {text}
        <img src={icon} style={{ height: 20, width: 20 }} />
      </button>
    );
  } else
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor,
          border: "none",
          borderRadius: 10,
          padding: padding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          color: textColor,
        }}
      >
        {text}
      </button>
    );
}
