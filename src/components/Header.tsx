import { useNavigate } from "react-router-dom";
import { useLarguraAtual } from "../customHooks/useLarguraAtual";
import s from "../modules/Home.module.css";
import { Rotas } from "../navigation/Rotas";

export const Header = () => {
  const nav = useNavigate();

  const currrentWidth = useLarguraAtual();
  console.log(currrentWidth);

  return (
    <header>
      <nav>
        <div className={s.logo}>Pitsfy</div>
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
        <h1>Realizamos a publicação do seu aplicativo na Play Store</h1>
        <p style={{ marginTop: 20, marginBottom: 20 }}>
          Deixe todo o trabalho burocrático e técnico com a gente.
        </p>
        {currrentWidth <= 500 ? (
          <a
            style={{
              backgroundColor: "#4caf50",
            }}
            className={s.cta}
            onClick={() => {
              nav(`${Rotas.CHECKOUT}/basic`);
            }}
          >
            Publicar agora
          </a>
        ) : (
          <a
            style={{ marginBottom: 50, backgroundColor: "#4caf50" }}
            href="#pricing"
            className={s.cta}
          >
            Ver Pacotes
          </a>
        )}
      </div>
    </header>
  );
};
