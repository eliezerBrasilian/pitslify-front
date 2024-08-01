import { useEffect } from "react";
import { Benefits } from "../components/Benefits";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pricing } from "../components/Pricing";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import s from "../modules/Home.module.css";
export function Home() {
  const { removeVisibility } = useCabecalhoContext();

  useEffect(() => {
    removeVisibility();
  }, []);

  return (
    <div className={s.home_container}>
      <Header />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
