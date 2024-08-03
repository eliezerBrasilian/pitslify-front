import { api } from "../api/client/client";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { UploadFileService } from "../services/UploadFileeService";
import { AppRequestDto, AppStatus } from "../types/AppRequestDto";
import { FormData as FormDataProps } from "../types/FormData";
interface AppResponsedto {
  message: string;
  id: string;
}

export class AppRepository {
  builder(formData: FormDataProps) {
    return {
      data: {
        name: formData.name,
        short_description: formData.shortDescription,
        long_description: formData.longDescription,
        has_ads: formData.hasAds,
        collects_localization: formData.hasLocation,
        login_data: {
          login: formData.loginTextInput,
          password: formData.loginPasswordInput,
        },
        allows_purchase: formData.hasInAppPurchases,
      },
      user_data: {
        email: localStorage.getItem(LocalStorageKeys.EMAIL),
        id: localStorage.getItem(LocalStorageKeys.USER_ID),
      },
      status: AppStatus.WAITING_PUSH,
    };
  }

  async createApp(
    appRequest: AppRequestDto,
    aabFile: any,
    icon: any,
    screenshots: File[]
  ) {
    try {
      const response = (await api.post(`/app/create`, appRequest))
        .data as AppResponsedto;

      const appId = response.id;
      await this.sendAab(aabFile, appId);
      await this.sendIcon(icon, appId);
      await this.sendImages(screenshots, appId);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async sendAab(file: any, appId: string) {
    try {
      var uploadService = new UploadFileService();

      const aabUrlRef = await uploadService.uploadToFirebaseStorage(file);

      const response: any = await api.post(`/app/file/upload/aab/${appId}`, {
        url: aabUrlRef,
      });
      console.log(response);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  async sendIcon(icon: any, appId: string) {
    try {
      const formData = new FormData();
      formData.append("file", icon);

      const response: any = await api.post(
        `/app/file/upload/${appId}/icon`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  async sendImages(screenshots: File[], appId: string) {
    try {
      const formData = new FormData();

      screenshots.forEach((screenshot: File) => {
        formData.append("images", screenshot);
      });

      const response: any = await api.post(
        `/app/file/upload/images/${appId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }
}
