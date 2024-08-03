import s from "../modules/UserArea.module.css";

interface ScreenshotsPreviewProps {
  screenshots: File[];
}

export function ScreenshotsPreview(props: ScreenshotsPreviewProps) {
  if (props.screenshots.length == 0) return;
  return (
    <div className={s.screenshots_preview}>
      {props.screenshots.map((file, index) => (
        <img
          key={index}
          src={URL.createObjectURL(file)}
          alt={`Screenshot ${index + 1}`}
        />
      ))}
    </div>
  );
}
