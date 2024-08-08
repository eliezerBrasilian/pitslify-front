import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import right from "../assets/right-arrow.png";
import { ButtonWithTooltip } from "../components/ButtonWithTooltip";
import { Footer } from "../components/Footer";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import s from "../modules/MyApps.module.css";
import { Header } from "../navigation/Header";
import { Rotas } from "../navigation/Rotas";
import { UserRepository } from "../repositories/UserRepository";
import { AppStatus } from "../types/AppRequestDto";
import { AppResponseDto } from "../types/AppResponseDto";
import { AppUtils } from "../utils/AppUtils";
const MyApps = () => {
  const [apps, setApps] = useState<AppResponseDto[]>();
  const userRepo = new UserRepository();

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.USER_ID) == null) {
      nav(Rotas.HOME);
    }
  }, []);

  useEffect(() => {
    async function fetchApps() {
      const lista = await userRepo.getMyApps();
      console.log(lista);
      setApps(lista);
    }
    fetchApps();
  }, []);

  const clickRequestTransfer = async (appId: string) => {
    await userRepo.requestTransfer(appId);
  };

  return (
    <div className={s.my_apps_container}>
      <Header />
      <main className={s.main_content}>
        <div
          style={{
            alignSelf: "flex-end",
            marginRight: 40,
            backgroundColor: "#345995",
            padding: 9,
            borderStyle: "none",
            borderRadius: 10,
            cursor: "pointer",
            marginBottom: 20,
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
                <img
                  src={`data:image/jpeg;base64,${item.icon}`}
                  alt="icone do app"
                />
                <div>
                  <h1>Nome: {item.name}</h1>
                  <h2>Descrição curta: {item.shortDescription}</h2>
                  <h2>Status: {getStatusText(item.appStatus)}</h2>
                  {item.appStatus == AppStatus.APPROVED && (
                    <button
                      onClick={() => {
                        AppUtils.copyToClipboard(item.googlePlayLink);
                      }}
                    >
                      Obter o link do aplicativo na Playstore
                    </button>
                  )}

                  {item.appStatus != AppStatus.WAITING_PUSH && (
                    <ButtonWithTooltip
                      transferStatus={item.transferStatus}
                      onClick={() => clickRequestTransfer(item.id)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};
/*

export enum TransferStatus {
  IDLE,
  REQUESTED,
  ACCEPTED,
  DISAPPROVED,
  SUCCESS,
}
*/

const getStatusText = (status: AppStatus) => {
  if (status == AppStatus.APPROVED) {
    return "Publicado com sucesso";
  } else if (status == AppStatus.DISAPPROVED) {
    return "Rejeitado, fazendo a republicação...";
  } else if (status == AppStatus.IN_REVIEW) {
    return "Sendo revisado pela GooglePlay";
  } else if (status == AppStatus.PUSHED) {
    return "Enviado para análise";
  } else {
    return "Adicionado a fila de publicação";
  }
};

export default MyApps;
