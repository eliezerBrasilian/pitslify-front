import { api } from "../api/client/client";
import { UploadImageService } from "../services/UploadImageService";
import { AppRequestDto } from "../types/AppRequestDto";

interface AppResponsedto {
  message: string;
  id: string;
}
export class AppRepository {
  async createApp(appRequest: AppRequestDto, file: any) {
    try {
      const response = (await api.post(`/app/create`, appRequest))
        .data as AppResponsedto;

      await this.sendAab(file, response.id);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async sendAab(file: any, appId: string) {
    try {
      console.log("id: " + appId);
      var uploadService = new UploadImageService();

      const aabUrlRef = await uploadService.uploadToFirebaseStorage(file);

      const response: any = await api.post(
        `/app/file/upload/aab/${appId}/${aabUrlRef}`
      );
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.message);
      throw new Error(error);
    }
  }
}
