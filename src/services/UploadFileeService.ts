import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";

export class UploadFileService {
  async uploadToFirebaseStorage(file: File) {
    console.log(file);
    try {
      const storageRef = ref(storage, "/app_resources/aab/" + file.name);

      await uploadBytes(storageRef, file);
      console.log("Arquivo enviado com sucesso!");

      const fileUrl = await getDownloadURL(storageRef);
      console.log("URL do aab:", fileUrl);

      return fileUrl;
    } catch (error: any) {
      return null;
    }
  }
}
