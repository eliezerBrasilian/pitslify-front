interface CircleArrowButtonProps {
  image: string;
  onClick: () => void;
}
export function CircleArrowButton({ image, onClick }: CircleArrowButtonProps) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: 30,
        width: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30 / 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={image} style={{ height: 12, width: 12 }} />
    </div>
  );
}
