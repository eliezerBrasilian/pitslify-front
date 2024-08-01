import { useNavigate } from "react-router-dom";
import s from "../modules/Home.module.css";
import { Rotas } from "../navigation/Rotas";
import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  const nav = useNavigate();

  return (
    <section id="pricing">
      <h2>Opções de Pacotes</h2>
      <div className={s.pricing_container}>
        <PricingPlan
          title="Pacote Básico"
          price="R$ 30,00 por publicação"
          linkText="Começar"
          onClick={() => {
            nav(`${Rotas.CHECKOUT}/basic`);
          }}
        />
        <PricingPlan
          title="Pacote Profissional"
          price="$70 por mês (publicações ilimitadas)"
          linkText="Começar"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};
