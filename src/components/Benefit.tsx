import s from "../modules/Home.module.css";

export const Benefit = ({ imgSrc, title, description }) => {
  return (
    <div className={s.benefit}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
