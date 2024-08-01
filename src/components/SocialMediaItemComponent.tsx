import s from "../modules/SocialMedia.module.css";
import { AppUtils } from "../utils/AppUtils";
import { CustomBtn } from "./CustomBtn";

export interface SocialMediaDto {
  imagePath: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
}

interface SocialMediaItemComponentProps {
  item: SocialMediaDto;
}

export function SocialMediaItemComponent({
  item,
}: SocialMediaItemComponentProps) {
  return (
    <div className={s.social_media_column}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div className={s.circle_image}>
          <img src={item.imagePath} alt="Imagem circular" />
        </div>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <CustomBtn
        onClick={() => {
          AppUtils.NavigateToNewWindow(item.link);
        }}
        text={item.btnText}
        padding={"9px 15px 9px 15px"}
        backgroundColor="#475A55"
      />
      <hr />
    </div>
  );
}
