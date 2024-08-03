import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";

class UploadImageService {
  async uploadToFirebaseStorage(imageFile: any) {
    console.log(imageFile);
    try {
      const storageRef = ref(storage, "/app_resources/aab/" + imageFile.name);

      await uploadBytes(storageRef, imageFile);
      console.log("Arquivo enviado com sucesso!");

      const imageUrl = await getDownloadURL(storageRef);
      console.log("URL do aab:", imageUrl);

      return imageUrl;
    } catch (error: any) {
      return null;
    }
  }
}

export { UploadImageService };
