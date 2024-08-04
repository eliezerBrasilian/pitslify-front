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
  IDLE = "IDLE",
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED",
  DISAPPROVED = "DISAPPROVED",
  SUCCESS = "SUCCESS",
}

export function stringToTransferStatus(status: string): TransferStatus | null {
  switch (status.toUpperCase()) {
    case "IDLE":
      return TransferStatus.IDLE;
    case "REQUESTED":
      return TransferStatus.REQUESTED;
    case "ACCEPTED":
      return TransferStatus.ACCEPTED;
    case "DISAPPROVED":
      return TransferStatus.DISAPPROVED;
    case "SUCCESS":
      return TransferStatus.SUCCESS;
    default:
      return null;
  }
}

export function StatusToString(status: TransferStatus): string {
  switch (status) {
    case TransferStatus.IDLE:
      return "IDLE";
    case TransferStatus.REQUESTED:
      return "REQUESTED";
    case TransferStatus.ACCEPTED:
      return "ACCEPTED";
    case TransferStatus.DISAPPROVED:
      return "DISAPPROVED";
    case TransferStatus.SUCCESS:
      return "SUCCESS";
    default:
      return "UNKNOWN";
  }
}
