import s from "../modules/Home.module.css";

interface PricingPlanProps {
  title: string;
  priceText: string;
  linkText: string;
  onClick: () => void;
}
export const PricingPlan = (props: PricingPlanProps) => {
  return (
    <div className={s.pricing_plan}>
      <h3>{props.title}</h3>
      <p>{props.priceText}</p>
      <p onClick={props.onClick} className={s.cta}>
        {props.linkText}
      </p>
    </div>
  );
};
