import { cores } from "../assets/cores";
import s from "../modules/ProjectScreen.module.css";
import { ProjectDto } from "../types/ProjectDto";
import { AppUtils } from "../utils/AppUtils";
import { CustomBtn } from "./CustomBtn";

interface ProjectItemComponentProps {
  item: ProjectDto;
}

export function ProjecLibItemComponent({ item }: ProjectItemComponentProps) {
  return (
    <div className={s.item_container}>
      <div className={s.right_column}>
        <h3
          style={{
            color: cores.azul_claro,
            fontSize: 17,
            textAlign: "center",
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: 12, textAlign: "center" }}>{item.nicho}</p>
        <p style={{ marginTop: 20 }}>{item.description}</p>

        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={s.btns_row}
        >
          <CustomBtn
            onClick={() => {
              AppUtils.NavigateToNewWindow(item.githubLink);
            }}
            text={"Ver documentação no Github"}
            padding={"9px 15px 9px 15px"}
            backgroundColor="#92E9D4"
            textColor="#000"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
