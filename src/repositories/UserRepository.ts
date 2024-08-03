import { api } from "../api/client/client";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { AppRequestDto } from "../types/AppRequestDto";

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
      return response.data as AppRequestDto[];
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
