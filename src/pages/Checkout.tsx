import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cores } from "../assets/cores";
import { CheckoutForm } from "../components/CheckoutForm";
import { Footer } from "../components/Footer";
import { useCabecalhoContext } from "../context/CabecalhoContext";
import { useCheckOrder } from "../customHooks/useCheckOrder";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { OrderType } from "../enums/OrderType";
import { Platform } from "../enums/Plataform";
import { Status } from "../enums/Status";
import s from "../modules/Checkout.module.css";
import { OrderRepository } from "../repositories/OrderRepository";

const Checkout = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [password, setPassword] = useState("");

  const orderRepository = new OrderRepository();

  const { id } = useParams();

  const [base64, setBase64] = useState("");

  useCheckOrder(orderId, orderStatus, email, (orderDetails) => {
    setPassword(orderDetails.password);
    localStorage.setItem(LocalStorageKeys.PASSWORD, orderDetails.password);

    setOrderStatus(Status.APPROVED);
  });

  const buyBasic = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    await orderRepository.buyBasic(
      {
        platform: Platform.WEB,
        product_data: {
          description: "basic access",
          price: 30,
          title: "basic access",
        },
        user_data: {
          email: email,
          first_name: name,
        },
        type: OrderType.CHECKOUT,
      },
      (result) => {
        setBase64(result.qrcode);
        console.log(result);
        setOrderId(result.order_id);
        localStorage.setItem(LocalStorageKeys.ORDER_ID, result.order_id);
      }
    );
  };

  const { removeVisibility } = useCabecalhoContext();

  useEffect(() => {
    removeVisibility();
  }, []);

  return (
    <div className={s.checkout_container}>
      <main>
        {orderStatus == Status.APPROVED ? (
          <section
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <h1 style={{ color: "black", fontSize: 25 }}>
              Seus dados de acesso
            </h1>

            <h2 style={{ color: "black", fontWeight: "600", fontSize: 20 }}>
              Painel de acesso:
              {
                <p style={{ color: cores.azul_claro }}>
                  https://www.pitsfy.com.br/login
                </p>
              }
            </h2>
            <p style={{ color: "black" }}>
              Login: <strong>{email}</strong>
            </p>
            <p style={{ color: "black" }}>
              Senha: <strong>{password}</strong>{" "}
            </p>
          </section>
        ) : (
          <CheckoutForm
            onClickSubmit={buyBasic}
            qrcode={base64}
            form={{
              fullName: name,
              email: email,
              phone: phoneNumber,
              userType: userType,
              onEmailChange: (ev) => setEmail(ev.target.value),
              onNameChange: (ev) => setFullName(ev.target.value),
              onPhoneChange: (ev) => setPhoneNumber(ev.target.value),
              onUserTypeChange: (ev) => setUserType(ev.target.value),
            }}
            page={{ id: id }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
