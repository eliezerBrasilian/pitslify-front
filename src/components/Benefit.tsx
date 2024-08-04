import { cores } from "../assets/cores";
import s from "../modules/Home.module.css";

interface BenefitProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Benefit = (props: BenefitProps) => {
  return (
    <div className={s.benefit}>
      <img
        src={props.imgSrc}
        alt={props.title}
        style={{ height: 50, width: 50, marginBottom: 25 }}
      />
      <h3 style={{ color: cores.azul_claro }}>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
