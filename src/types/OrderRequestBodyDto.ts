import { OrderType } from "../enums/OrderType";
import { Platform } from "../enums/Plataform";
import { ProductData } from "./ProductData";
import { UserData } from "./UserData";

export interface OrderRequestBodyDto {
  user_data: UserData;
  product_data: ProductData;
  platform: Platform;
  type: OrderType;
}
