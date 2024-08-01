import { useNavigate } from "react-router-dom";
import s from "../modules/Home.module.css";
import { Rotas } from "../navigation/Rotas";

export const Header = () => {
  const nav = useNavigate();
  return (
    <header>
      <nav>
        <div className={s.logo}>Pitslify</div>
        <ul>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#benefits">Benefícios</a>
          </li>
          <li>
            <a href="#pricing">Preços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <p onClick={() => nav(Rotas.LOGIN)} className={s.cta}>
              Acessar Minha Área
            </p>
          </li>
        </ul>
      </nav>
      <div className={s.hero}>
        <h1>Facilitamos a publicação do seu aplicativo na Play Store</h1>
        <p>Deixe todo o trabalho burocrático e técnico com a gente.</p>
        <a href="#pricing" className={s.cta}>
          Saiba Mais
        </a>
      </div>
    </header>
  );
};
