import { useEffect } from "react";
import { Status } from "../enums/Status";
import { OrderRepository } from "../repositories/OrderRepository";
import { OrderStatus } from "../types/OrderStatus";

export function useCheckOrder(
  orderId: string,
  orderStatus: string,
  email: string,
  onSuccessCallback: (orderDetails: OrderStatus) => void
) {
  const orderRepository = new OrderRepository();

  useEffect(() => {
    if (orderId != "" && orderStatus != Status.APPROVED) {
      async function checkOrderStatus() {
        console.log("orderid: " + orderId);

        const orderDetails = await orderRepository.checkOrderStatus(
          orderId,
          email
        );

        const status = orderDetails.status;

        if (status == Status.WAITING) {
          console.log("esta aguardando");
        } else if (status == Status.APPROVED) {
          onSuccessCallback(orderDetails);
        }
      }

      const intervalId = setInterval(checkOrderStatus, 5000);

      return () => clearInterval(intervalId);
    }
  }, [orderId, orderStatus]);
}
