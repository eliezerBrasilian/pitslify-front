import s from "../modules/Home.module.css";

interface BenefitProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Benefit = (props: BenefitProps) => {
  return (
    <div className={s.benefit}>
      <img src={props.imgSrc} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
