import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/frajola_thumb.jpg";
import right from "../assets/right-arrow.png";
import { Footer } from "../components/Footer";
import { getDefaultApps } from "../data/getApps";
import s from "../modules/MyApps.module.css";
import { Header } from "../navigation/Header";
import { Rotas } from "../navigation/Rotas";
import { AppStatus } from "../types/AppRequestDto";
import { AppResponseDto } from "../types/AppResponseDto";

const MyApps = () => {
  const [apps, setApps] = useState<AppResponseDto[]>();
  //const userRepo = new UserRepository();

  const nav = useNavigate();

  useEffect(() => {
    setApps(getDefaultApps);
  }, []);

  // useEffect(() => {
  //   async function fetchApps() {
  //     const lista = await userRepo.getMyApps();
  //     setApps(lista);
  //   }
  //   fetchApps();
  // }, []);

  return (
    <div className={s.my_apps_container}>
      <Header />
      <main className={s.main_content}>
        <div
          style={{
            alignSelf: "flex-end",
            marginRight: 40,
            backgroundColor: "#f35424",
            padding: 9,
            borderStyle: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
          onClick={() => nav(Rotas.USER_AREA)}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <p style={{ fontSize: 12, fontWeight: "600" }}>
              Submeter aplicativo
            </p>
            <img src={right} height={20} width={20} />
          </div>
        </div>
        {apps?.length == 0 ? (
          <h1>Você ainda não enviou nenhum app</h1>
        ) : (
          <div>
            {apps?.map((item, index) => (
              <div key={index} className={s.app_item}>
                <img src={icon} />
                <div>
                  <h1>Nome: {item.name}</h1>
                  <h2>Descrição curta: {item.name}</h2>
                  <h2>Status: {AppStatus[item.appStatus]}</h2>
                  {item.appStatus == AppStatus.APPROVED && (
                    <button>Obter o link do aplicativo na Playstore</button>
                  )}

                  <ButtonWithTooltip />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyApps;

export const ButtonWithTooltip: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={s.tooltip_container}>
      <button
        className={s.tooltip_button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Solicitar transferência para minha conta de Desenvolvedor
      </button>
      {showTooltip && (
        <span className={s.tooltip_text}>
          Transferimos o aplicativo para sua conta de desenvolvedor na Google
          Play Console
        </span>
      )}
    </div>
  );
};
