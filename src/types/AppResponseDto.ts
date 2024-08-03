import { AppStatus } from "./AppRequestDto";

export interface AppResponseDto {
  id: string;
  userId: string;
  name: string;
  short_description: string;
  long_description: string;
  has_ads: boolean;
  collects_localization: boolean;
  login_data: LoginData;
  allows_purchase: boolean;
  icon: any;
  images: any;
  aab: string;
  appStatus: AppStatus;
  googlePlayLink: string;
  transferStatus: TransferStatus;
  createdAt: number;
}

interface LoginData {
  login: string;
  password: string;
}

export enum TransferStatus {
  IDLE,
  REQUESTED,
  ACCEPTED,
  DISAPPROVED,
  SUCCESS,
}
