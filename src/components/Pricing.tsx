import { useNavigate } from "react-router-dom";
import s from "../modules/Home.module.css";
import { Rotas } from "../navigation/Rotas";
import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  const nav = useNavigate();

  return (
    <section id="pricing">
      <h2>Opções de Pacotes</h2>
      <div style={{ height: 200 }} className={s.pricing_container}>
        <PricingPlan
          title="Pacote Básico"
          priceText="R$ 30,00 por publicação"
          linkText="Começar"
          onClick={() => {
            nav(`${Rotas.CHECKOUT}/basic`);
          }}
        />
        <PricingPlan
          title="Pacote Profissional"
          priceText="$300 por mês (publicações ilimitadas)"
          linkText="Começar"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};
