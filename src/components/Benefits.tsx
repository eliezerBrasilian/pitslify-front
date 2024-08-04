import s from "../modules/Home.module.css";
import { Benefit } from "./Benefit";

import expertise from "../assets/expertise.png";
import tempo from "../assets/save-time.png";
import suport from "../assets/suport.png";

export const Benefits = () => {
  return (
    <section id={s.benefits}>
      <h2 style={{ marginTop: 70 }}>Por que escolher nosso serviço?</h2>
      <div className={s.benefits_container} style={{ marginTop: 60 }}>
        <Benefit
          imgSrc={tempo}
          title="Economize Tempo"
          description="Concentre-se no desenvolvimento enquanto cuidamos da publicação."
        />
        <Benefit
          imgSrc={expertise}
          title="Expertise"
          description="Nossa equipe possui experiência e conhece todas as diretrizes da Play Store."
        />
        <Benefit
          imgSrc={suport}
          title="Suporte Completo"
          description="Oferecemos suporte durante todo o processo de publicação."
        />
      </div>
    </section>
  );
};
