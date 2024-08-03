import { cores } from "../assets/cores";
import { CustomLoading } from "./CustomLoading";

type ButtonType = "button" | "submit" | "reset" | undefined;
interface BtnProps {
  text: string;
  textColor?: string;
  width?: string;
  backgroundColor?: string;
  icon?: string;
  padding?: string | number;
  onClick?: () => void;
  buttonType: ButtonType;
  isLoading?: boolean;
}

export function CustomBtn({
  text,
  textColor = "#fff",
  width = "fit-content",
  backgroundColor = cores.btn_vermelho,
  icon,
  padding = 15,
  onClick = () => {},
  buttonType = "button",
  isLoading,
}: BtnProps) {
  if (icon != undefined) {
    return (
      <button
        type={buttonType}
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
        onClick={() => {
          if (!isLoading) {
            onClick();
          }
        }}
        style={{
          backgroundColor: backgroundColor,
          border: "none",
          borderRadius: 10,
          padding: padding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: !isLoading ? width : 180,
          color: textColor,
          cursor: !isLoading ? "pointer" : "default",
        }}
      >
        {isLoading ? <CustomLoading tam={20} cor="#fff" /> : text}
      </button>
    );
}
