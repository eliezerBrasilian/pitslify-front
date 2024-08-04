import { api } from "../api/client/client";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { AppResponseDto } from "../types/AppResponseDto";

interface UserPermissionStatus {
  has_permission: boolean;
  message: string;
}

export class UserRepository {
  async checkIfUserCanSendApp() {
    try {
      var userId = localStorage.getItem(LocalStorageKeys.USER_ID);

      const res = await api.get(`/user/check-send-app/${userId}`);
      const data: UserPermissionStatus = res.data;

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updatePermissionAboutSendApp() {
    try {
      var userId = localStorage.getItem(LocalStorageKeys.USER_ID);

      const response = await api.post(`/user/update-send-app/${userId}`);
      console.log(response.data);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getMyApps() {
    try {
      var userId = localStorage.getItem(LocalStorageKeys.USER_ID);
      const response = await api.get(`/user/my-apps/${userId}`);
      return response.data as AppResponseDto[];
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async requestTransfer(appId: string) {
    console.log(appId);
    try {
      var userId = localStorage.getItem(LocalStorageKeys.USER_ID);

      const response = await api.post(
        `/user/request-app-transfer/${userId}/${appId}`
      );
      alert("Transferência solicitada!");

      console.log(response.data);
      window.location.reload();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
