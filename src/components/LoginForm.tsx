import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { Rotas } from "../navigation/Rotas";
import { AuthRepository } from "./../repositories/AuthRepository";

const LoginForm = () => {
  const [email, setEmail] = useState("teste2@gmail.com");
  const [password, setPassword] = useState("k1Tp8VfD");
  const nav = useNavigate();

  const { activateVisibility } = useCabecalhoContext();
  const authRepo = new AuthRepository();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Processar login
    console.log("Login data submitted:", { email, password });
    activateVisibility();

    authRepo.login(email, password, (data) => {
      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      localStorage.setItem(LocalStorageKeys.NOME, data.name);
      localStorage.setItem(LocalStorageKeys.FOTO, data.profilePicture);
      localStorage.setItem(LocalStorageKeys.USER_ID, data.userId);
      localStorage.setItem(LocalStorageKeys.EMAIL, data.email);
      nav(Rotas.USER_AREA);
    });
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default LoginForm;
