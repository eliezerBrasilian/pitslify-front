import { QRCodeSVG } from "qrcode.react";

interface QrcodeInterface {
  base64: string;
}

export function QrCode(props: QrcodeInterface) {
  if (props.base64 == "") return null;
  return (
    <div style={{ placeSelf: "center" }}>
      <QRCodeSVG value={props.base64} height={200} width={200} />
    </div>
  );
}
