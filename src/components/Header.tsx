import { useNavigate } from "react-router-dom";
import s from "../modules/Home.module.css";
import { Rotas } from "../navigation/Rotas";

export const Header = () => {
  const nav = useNavigate();
  return (
    <header>
      <nav>
        <div className={s.logo}>Pitslify</div>
        <div className={s.nav_row}>
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
            <p
              onClick={() => nav(Rotas.LOGIN)}
              className={s.cta}
              style={{ marginTop: 0 }}
            >
              Acessar Minha Área
            </p>
          </ul>
        </div>
      </nav>
      <div className={s.hero}>
        <h1>Facilitamos a publicação do seu aplicativo na Play Store</h1>
        <p style={{ marginTop: 20, marginBottom: 20 }}>
          Deixe todo o trabalho burocrático e técnico com a gente.
        </p>
        <a
          style={{ marginBottom: 50, backgroundColor: "#4caf50" }}
          href="#pricing"
          className={s.cta}
        >
          Ver Pacotes
        </a>
      </div>
    </header>
  );
};
