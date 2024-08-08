import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class AppUtils {
  static NavigateToNewWindow(link: string) {
    window.open(link, "_blank");
  }

  static copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text as string)
      .then(() => {
        toast("copiado com sucesso");
      })
      .catch((_err) => {
        alert("Erro ao copiar");
      });
  }

  static copiaChavePixParaTeclado(chave: string) {
    navigator.clipboard
      .writeText(chave as string)
      .then(() => {
        toast("chave pix copiada");
      })
      .catch((_err) => {
        alert("Erro ao copiar chave pix");
      });
  }

  static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }
}
