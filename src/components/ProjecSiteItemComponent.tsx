import { cores } from "../assets/cores";
import s from "../modules/ProjectScreen.module.css";
import { ProjectDto } from "../types/ProjectDto";
import { AppUtils } from "../utils/AppUtils";
import { CustomBtn } from "./CustomBtn";
import { ImageSlider } from "./ImageSlider";
import { ProjecAppItemComponent } from "./ProjecAppItemComponent";

interface ProjectItemComponentProps {
  item: ProjectDto;
}

export function ProjecSiteItemComponent({ item }: ProjectItemComponentProps) {
  if (item.title == "FoodFacil Delivery")
    return <ProjecAppItemComponent item={item} objectFit="cover" />;
  return (
    <div style={{ marginBottom: 15 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 20,
        }}
      >
        <ImageSlider item={item} width={300} height={200} />

        <div className={s.right_column}>
          <h3
            style={{
              color: cores.azul_claro,

              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          <p style={{ fontSize: 12, textAlign: "center" }}>{item.nicho}</p>
          <p style={{ marginTop: 20 }}>{item.description}</p>

          <div style={{ justifyContent: "center" }} className={s.btns_row}>
            <CustomBtn
              onClick={() => {
                AppUtils.NavigateToNewWindow(item.githubLink);
              }}
              text={"Conhecer no Github"}
              padding={"9px 15px 9px 15px"}
              backgroundColor="#92E9D4"
              textColor="#000"
            />
            <CustomBtn
              onClick={() => {
                AppUtils.NavigateToNewWindow(item.testLink);
              }}
              text={"Abrir site"}
              padding={"9px 20px 9px 20px"}
              backgroundColor="#475A55"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
