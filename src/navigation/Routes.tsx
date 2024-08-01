import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import Checkout from "../pages/Checkout";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import UserArea from "../pages/UserArea";
import { Header } from "./Header";
import { Rotas } from "./Rotas";

export function RoutesApp() {
  const checkout = Rotas.CHECKOUT + "/:id";

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={Rotas.HOME} element={<Home />} />

        <Route path={Rotas.USER_AREA} element={<UserArea />} />
        <Route path={Rotas.LOGIN} element={<Login />} />
        <Route path={checkout} element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
