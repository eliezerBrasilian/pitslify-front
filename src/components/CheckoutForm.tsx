import { ChangeEvent, FormEvent } from "react";
import s from "../modules/Checkout.module.css";
import { AppUtils } from "../utils/AppUtils";
import { PixView } from "./PixView";
import { QrCode } from "./QrCode";

interface CheckoutFormProps {
  page: {
    id?: string;
  };
  form: {
    fullName: string;
    email: string;
    phone: string;
    userType: string;
    onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onUserTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  };
  qrcode: string;

  onClickSubmit: (ev: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function CheckoutForm(props: CheckoutFormProps) {
  return (
    <section className={s.checkout}>
      {props.qrcode == "" ? (
        <div>
          <h1 style={{ color: "#000", fontSize: 20 }}>Checkout</h1>
          <p
            style={{
              color: "#000",
              fontWeight: "500",
              fontFamily: "sans-serif",
              marginBottom: 30,
            }}
          >
            Pacote escolhido:{" "}
            {props.page.id == "basic"
              ? "Publicação de um aplicativo por R$ 30,00"
              : "PACOTE MENSAL COM DIREITO A VARIAS PUBLICAÇÕES"}
          </p>
          <form onSubmit={props.onClickSubmit}>
            <label>
              Nome Completo:
              <input
                type="text"
                value={props.form.fullName}
                onChange={props.form.onNameChange}
                required
                placeholder="informe seu nome"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={props.form.email}
                onChange={props.form.onEmailChange}
                required
                placeholder="informe seu email"
              />
            </label>
            <label>
              Número de Celular:
              <input
                type="number"
                value={props.form.phone}
                onChange={props.form.onPhoneChange}
                required
                placeholder="informe seu numero de celular"
              />
            </label>
            <label>
              Tipo de Usuário:
              <select
                value={props.form.userType}
                onChange={props.form.onUserTypeChange}
                required
              >
                <option value="usuario">Usuário Comum</option>
                <option value="empresa">Empresa</option>
              </select>
            </label>
            <button type="submit">Gerar Chave PIX</button>
          </form>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "#000", marginBottom: 20, textAlign: "center" }}>
            Faça o pagamento abaixo para liberar seu acesso
          </h1>
          <QrCode base64={props.qrcode} />

          <PixView
            chavePix={props.qrcode}
            onClick={() => {
              AppUtils.copiaChavePixParaTeclado(props.qrcode);
            }}
          />
        </div>
      )}
    </section>
  );
}
