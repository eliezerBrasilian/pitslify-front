import { Footer } from "../components/Footer";
import LoginForm from "../components/LoginForm";
import s from "../modules/Login.module.css";
const Login = () => {
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
