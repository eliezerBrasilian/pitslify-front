export interface FormData {
  name: string;
  shortDescription: string;
  longDescription: string;
  hasAds: boolean;
  hasLocation: boolean;
  usesApi: boolean;
  hasLogin: boolean;
  loginTextInput: string;
  loginPasswordInput: string;
  hasInAppPurchases: boolean;
  icon: File | null;
  screenshots: File[];
  aab: File | null;
}
