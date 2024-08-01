import s from "../modules/Home.module.css";

export const PricingPlan = ({ title, price, linkText, onClick }) => {
  return (
    <div className={s.pricing_plan}>
      <h3>{title}</h3>
      <p>{price}</p>
      <p onClick={onClick} className={s.cta}>
        {linkText}
      </p>
    </div>
  );
};
