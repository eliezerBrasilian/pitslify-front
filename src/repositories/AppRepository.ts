import { api } from "../api/client/client";
import { LocalStorageKeys } from "../enums/LocalStorageKeys";
import { UploadImageService } from "../services/UploadImageService";
import { AppRequestDto } from "../types/AppRequestDto";

export class AppRepository {
  async createApp(appRequest: AppRequestDto, file: any) {
    try {
      await api.post(`/app/create`, appRequest);
      alert("App enviado com sucesso. Aguarde a publicação");
      await this.sendAab(file);
    } catch (error: any) {
      console.log(error.response.data.message);
      throw new Error(error);
    }
  }

  async sendAab(file: any) {
    try {
      var id = localStorage.getItem(LocalStorageKeys.USER_ID);
      var uploadService = new UploadImageService();

      const aabUrlRef = await uploadService.uploadToFirebaseStorage(file);

      const response: any = await api.post(
        `/file/upload/aab/${id}/${aabUrlRef}`
      );
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.message);
      throw new Error(error);
    }
  }
}
