import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import s from "../modules/Login.module.css";
import { Rotas } from "../navigation/Rotas";
const Login = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.TOKEN) != null) {
      nav(Rotas.USER_AREA);
    }
  }, []);
  return (
    <div className={s.login_container}>
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
