import { api } from "../api/client/client";
import { AuthResponseDto } from "../types/AuthResponseDto";

export class AuthRepository {
  async login(
    email: string,
    senha: string,
    onSuccess: (data: AuthResponseDto) => void
  ) {
    var body = { email: email, password: senha };

    try {
      const resp = await api.post("/auth/login", body);
      const data: AuthResponseDto = resp.data;

      onSuccess(data);
    } catch (e: any) {
      var message = e.response.data.message;

      window.alert(message);
    }
  }
}
