import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import s from "../modules/Login.module.css";
import { Rotas } from "../navigation/Rotas";
import { AuthRepository } from "./../repositories/AuthRepository";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const { activateVisibility } = useCabecalhoContext();
  const authRepo = new AuthRepository();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authRepo.login(email, password, (data) => {
      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      localStorage.setItem(LocalStorageKeys.NOME, data.name);
      localStorage.setItem(LocalStorageKeys.FOTO, data.profilePicture);
      localStorage.setItem(LocalStorageKeys.USER_ID, data.userId);
      localStorage.setItem(LocalStorageKeys.EMAIL, data.email);
      activateVisibility();
      nav(Rotas.USER_AREA);
    });
  };

  return (
    <section className={s.login_form}>
      <h1>Seja muito bem vindo</h1>
      <h2>Realize o seu login, abaixo com seus dados de acesso</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Informe seu email"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Informe sua senha"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default LoginForm;
