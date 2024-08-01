import s from "../modules/Home.module.css";
import { Benefit } from "./Benefit";

export const Benefits = () => {
  return (
    <section id={s.benefits}>
      <h2>Por que escolher nosso serviço?</h2>
      <div className={s.benefits_container}>
        <Benefit
          imgSrc="https://source.unsplash.com/300x200/?time-management"
          title="Economize Tempo"
          description="Concentre-se no desenvolvimento enquanto cuidamos da publicação."
        />
        <Benefit
          imgSrc="https://source.unsplash.com/300x200/?expertise"
          title="Expertise"
          description="Nossa equipe possui experiência e conhece todas as diretrizes da Play Store."
        />
        <Benefit
          imgSrc="https://source.unsplash.com/300x200/?support"
          title="Suporte Completo"
          description="Oferecemos suporte durante todo o processo de publicação."
        />
      </div>
    </section>
  );
};
