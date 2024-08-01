import { cores } from "../assets/cores";
import s from "../modules/ProjectScreen.module.css";
import { ProjectDto } from "../types/ProjectDto";
import { AppUtils } from "../utils/AppUtils";
import { CustomBtn } from "./CustomBtn";
import { ImageSlider, ObjectFit } from "./ImageSlider";

interface ProjectItemComponentProps {
  item: ProjectDto;
  objectFit?: ObjectFit;
}

export function ProjecAppItemComponent({
  item,
  objectFit,
}: ProjectItemComponentProps) {
  return (
    <div className={s.item_container}>
      <div className={s.item_row}>
        <ImageSlider item={item} objectFit={objectFit} />

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
          {item.title == "FoodFacil Delivery" && (
            <p style={{ fontSize: 12, textAlign: "center", color: "red" }}>
              {"Foi pensado para celular então recomendo abrir no seu celular"}
            </p>
          )}

          <p style={{ marginTop: 20 }}>{item.description}</p>

          <div className={s.btns_row}>
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
              text={
                item.title == "FoodFacil Delivery" ? "Abrir site" : "GooglePlay"
              }
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
