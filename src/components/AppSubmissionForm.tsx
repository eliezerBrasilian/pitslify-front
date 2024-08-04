import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useCheckOrder } from "../customHooks/useCheckOrder";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { OrderType } from "../enums/OrderType";
import { Platform } from "../enums/Plataform";
import { Status } from "../enums/Status";
import s from "../modules/UserArea.module.css";
import { Rotas } from "../navigation/Rotas";
import { AppRepository } from "../repositories/AppRepository";
import { OrderRepository } from "../repositories/OrderRepository";
import { UserRepository } from "../repositories/UserRepository";
import { FormData } from "../types/FormData";
import { AppUtils } from "../utils/AppUtils";
import { CustomBtn } from "./CustomBtn";
import { PixView } from "./PixView";
import { QrCode } from "./QrCode";
import { ScreenshotsPreview } from "./ScreenshotsPreview";

export const AppSubmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    shortDescription: "",
    longDescription: "",
    hasAds: false,
    hasLocation: false,
    usesApi: false,
    hasLogin: false,
    loginTextInput: "",
    loginPasswordInput: "",
    hasInAppPurchases: false,
    icon: null,
    screenshots: [],
    aab: null,
  });

  const appRepository = new AppRepository();
  const userRepository = new UserRepository();
  const orderRepository = new OrderRepository();

  const nav = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleScreenshotsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      const totalFiles = formData.screenshots.length + newFiles.length;

      if (totalFiles > 5) {
        alert("Você só pode adicionar até 5 imagens.");
        return;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        screenshots: [...prevFormData.screenshots, ...newFiles],
      }));
    }
  };

  const [base64, setBase64] = useState("");
  const [userHasPermissionOnSendApp, setUserPermissionOnSendApp] =
    useState(false);

  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailSaved = localStorage.getItem(LocalStorageKeys.EMAIL);

    if (emailSaved != null) {
      setEmail(emailSaved);
    } else {
      setEmail("");
    }
  }, []);

  useEffect(() => {
    async function fetchUserPermission() {
      const userCanSendApp = await userRepository.checkIfUserCanSendApp();
      setUserPermissionOnSendApp(userCanSendApp.has_permission);
    }

    fetchUserPermission();
  }, []);

  useCheckOrder(orderId, orderStatus, email, async () => {
    setUserPermissionOnSendApp(true);
    await handleSendApp();
    setOrderStatus(Status.APPROVED);
  });

  const handleSendApp = async () => {
    try {
      await appRepository.createApp(
        appRepository.builder(formData),
        formData.aab,
        formData.icon,
        formData.screenshots
      );
      alert("App enviado com sucesso. Aguarde a publicação");
      await userRepository.updatePermissionAboutSendApp();
      setLoading(false);
      nav(Rotas.MY_APPS);
    } catch (e) {
      console.log(e);
      alert("Não foi possível enviar seu app já estamos resolvendo o problema");
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    if (userHasPermissionOnSendApp) {
      await handleSendApp();
    } else {
      const first_name = localStorage.getItem(LocalStorageKeys.NOME);
      if (email != null && first_name !== null) {
        try {
          await orderRepository.buyBasic(
            {
              platform: Platform.WEB,
              product_data: {
                description: "basic access",
                price: 1,
                title: "basic access",
              },
              user_data: {
                email: email,
                first_name: first_name,
              },
              type: OrderType.PUBLISH_APP,
            },
            (result) => {
              setBase64(result.qrcode);
              console.log(result);
              setOrderId(result.order_id);
              localStorage.setItem(LocalStorageKeys.ORDER_ID, result.order_id);
            }
          );
        } catch (error) {
          alert("Ocorreu um erro ao tentar realizar o pagamento");
          setLoading(false);
        }
      }
    }
  };

  return (
    <section className={s.app_submission_container}>
      <h2>Submeter Novo Aplicativo</h2>
      {base64 == "" && (
        <p>
          Forneça só o essencial abaixo, e então nós cuidaremos do resto pra
          você!
        </p>
      )}

      {base64 != "" && (
        <div style={{ marginTop: 20 }}>
          <p className={s.description} style={{ marginBottom: 10 }}>
            Realize o pagamento abaixo para seguir com a publicação de seu
            aplicativo
          </p>
          <QrCode base64={base64} />
          <PixView
            chavePix={base64}
            onClick={() => {
              AppUtils.copiaChavePixParaTeclado(base64);
            }}
          />
        </div>
      )}

      {base64 == "" && (
        <form style={{ marginTop: 20 }} onSubmit={handleSubmit}>
          {!loading && (
            <div className={s.form_column}>
              <label>
                Nome do Aplicativo:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Descrição Curta:
                <input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Descrição Longa:
                <textarea
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChangeTextArea}
                  required
                />
              </label>
              <label>
                Possui Anúncios:
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="hasAds"
                  checked={formData.hasAds}
                  onChange={handleChange}
                />
              </label>
              <label>
                Possui Localização:
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="hasLocation"
                  checked={formData.hasLocation}
                  onChange={handleChange}
                />
              </label>

              <label>
                Possui Login:
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="hasLogin"
                  checked={formData.hasLogin}
                  onChange={handleChange}
                />
              </label>
              {formData.hasLogin && (
                <div className={s.login_data_container}>
                  <h3 className={s.title}>Forneça um login e senha de teste</h3>
                  <label>
                    Login:
                    <input
                      type="text"
                      name="loginTextInput"
                      value={formData.loginTextInput}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Senha:
                    <input
                      type="text"
                      name="loginPasswordInput"
                      value={formData.loginPasswordInput}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              )}
              <label>
                Possui Compra Interna:
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="hasInAppPurchases"
                  checked={formData.hasInAppPurchases}
                  onChange={handleChange}
                />
              </label>
              <label>
                Ícone (.png, 512x512):
                <input
                  type="file"
                  name="icon"
                  accept="image/png"
                  onChange={handleFileChange}
                  required
                />
              </label>
              <div className={s.prints_row}>
                <label>
                  Prints das Telas (ou imagens editadas):
                  <input
                    type="file"
                    name="screenshots"
                    accept="image/*"
                    multiple
                    onChange={handleScreenshotsChange}
                    required
                    style={{ display: "none" }}
                    id="screenshotsInput"
                  />
                </label>
                <button
                  type="button"
                  className={s.btn_add_screenshot}
                  onClick={() =>
                    document.getElementById("screenshotsInput")?.click()
                  }
                >
                  +
                </button>
              </div>

              <ScreenshotsPreview screenshots={formData.screenshots} />

              <label>
                Aab :
                <input
                  type="file"
                  name="aab"
                  accept=".aab"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
          )}
          {loading && <h3>Seu aplicativo está sendo enviado...</h3>}

          <CustomBtn
            text={
              userHasPermissionOnSendApp
                ? "Enviar Aplicativo"
                : "Enviar Aplicativo - $30,00"
            }
            buttonType="submit"
            backgroundColor="#003459"
          />
        </form>
      )}
    </section>
  );
};

export default AppSubmissionForm;
