import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
