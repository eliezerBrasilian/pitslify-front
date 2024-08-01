import { api } from "../api/client/client";
import { OrderRequestBodyDto } from "../types/OrderRequestBodyDto";
import { OrderResponseDto } from "../types/OrderResponseDto";
import { OrderStatus } from "../types/OrderStatus";

export class OrderRepository {
  async buyBasic(
    order: OrderRequestBodyDto,
    onSuccess: (result: OrderResponseDto) => void
  ) {
    try {
      const response: any = await api.post(`/payment/buy/access/basic`, order);
      console.log(response);
      onSuccess(response.data as OrderResponseDto);
    } catch (error: any) {
      console.log(error.response.data.message);
      throw new Error(error);
    }
  }

  async checkOrderStatus(id: string, email: string) {
    try {
      const res = await api.get(`/payment/check-order/${id}/${email}`);
      const data: OrderStatus = res.data;

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
