import { Status } from "../enums/Status";

export interface OrderStatus {
  status: Status;
  userId: string;
  password: string;
}
