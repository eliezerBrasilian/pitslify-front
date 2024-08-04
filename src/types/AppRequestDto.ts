export interface AppRequestDto {
  data: Data;
  user_data: UserData;
  status: AppStatus;
}

interface Data {
  name: string;
  short_description: string;
  long_description: string;
  has_ads: boolean;
  collects_localization: boolean;
  login_data: LoginData;
  allows_purchase: boolean;
}

interface UserData {
  id: string | null;
  email: string | null;
}

interface LoginData {
  login: string;
  password: string;
}

export enum AppStatus {
  WAITING_PUSH = "WAITING_PUSH",
  PUSHED = "PUSHED",
  IN_REVIEW = "IN_REVIEW",
  DISAPPROVED = "DISAPPROVED",
  APPROVED = "APPROVED",
}
