import { useState } from "react";
import s from "../modules/MyApps.module.css";
import { TransferStatus } from "../types/AppResponseDto";

interface ButtonWithTooltipProps {
  transferStatus: TransferStatus;
  onClick: () => void;
}

export const ButtonWithTooltip = ({
  transferStatus = TransferStatus.IDLE,
  onClick,
}: ButtonWithTooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={s.tooltip_container}>
      {transferStatus == TransferStatus.IDLE ? (
        <button
          onClick={onClick}
          style={{ backgroundColor: "#40434E" }}
          className={s.tooltip_button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {getTransferText(TransferStatus.IDLE)}
        </button>
      ) : (
        <p style={{ fontStyle: "italic", marginTop: 20 }}>
          {getTransferText(transferStatus)}
        </p>
      )}

      {showTooltip && transferStatus == TransferStatus.IDLE && (
        <span className={s.tooltip_text}>
          Transferimos o aplicativo para sua conta de desenvolvedor na Google
          Play Console
        </span>
      )}
    </div>
  );
};

const getTransferText = (transferStatus: TransferStatus) => {
  if (transferStatus == TransferStatus.ACCEPTED) {
    return "Transferência aceita";
  } else if (transferStatus == TransferStatus.REQUESTED) {
    return "Transferência solicitada";
  } else if (transferStatus == TransferStatus.IDLE) {
    return "Solicitar transferência";
  } else if (transferStatus == TransferStatus.SUCCESS) {
    return "Transferência realizada!";
  } else {
    return "Transferência não aprovada!";
  }
};
