import { ChangeEvent, FormEvent } from "react";
import s from "../modules/Checkout.module.css";
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
      <div>
        <h2>Checkout</h2>
        <p
          style={{
            color: "#000",
            fontWeight: "500",
            fontFamily: "sans-serif",
          }}
        >
          Pacote escolhido:{" "}
          {props.page.id == "basic"
            ? "Publicação Única"
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
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={props.form.email}
              onChange={props.form.onEmailChange}
              required
            />
          </label>
          <label>
            Número de Celular:
            <input
              type="tel"
              value={props.form.phone}
              onChange={props.form.onPhoneChange}
              required
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

      {<QrCode base64={props.qrcode} />}
    </section>
  );
}
