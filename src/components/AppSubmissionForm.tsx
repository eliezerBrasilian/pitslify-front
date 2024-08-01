import { FormEvent, useState } from "react";
import s from "../modules/UserArea.module.css";
export const AppSubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
    hasAds: false,
    hasLocation: false,
    usesApi: false,
    hasLogin: false,
    loginTextInput: "",
    loginPasswordInput: "",
    hasInAppPurchases: false,
    icon: null,
    screenshots: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Processar a submissão do formulário
    console.log("Form data submitted:", formData);
  };

  return (
    <section className={s.app_submission_container}>
      <h2>Submeter Novo Aplicativo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Aplicativo:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descrição Curta:
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descrição Longa:
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Possui Anúncios:
          <input
            className={s.checkbox}
            type="checkbox"
            name="hasAds"
            checked={formData.hasAds}
            onChange={handleChange}
          />
        </label>
        <label>
          Possui Localização:
          <input
            className={s.checkbox}
            type="checkbox"
            name="hasLocation"
            checked={formData.hasLocation}
            onChange={handleChange}
          />
        </label>
        <label>
          Usa API Própria ou de Terceiros:
          <input
            className={s.checkbox}
            type="checkbox"
            name="usesApi"
            checked={formData.usesApi}
            onChange={handleChange}
          />
        </label>
        <label>
          Possui Login:
          <input
            className={s.checkbox}
            type="checkbox"
            name="hasLogin"
            checked={formData.hasLogin}
            onChange={handleChange}
          />
        </label>
        {formData.hasLogin && (
          <div className={s.login_data_container}>
            <h3>Forneça um login e senha de teste</h3>
            <label>
              Login:
              <input
                type="text"
                name="loginTextInput"
                value={formData.loginTextInput}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Senha:
              <input
                type="text"
                name="loginPasswordInput"
                value={formData.loginPasswordInput}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        )}
        <label>
          Possui Compra Interna:
          <input
            className={s.checkbox}
            type="checkbox"
            name="hasInAppPurchases"
            checked={formData.hasInAppPurchases}
            onChange={handleChange}
          />
        </label>
        <label>
          Ícone (.png, 512x512):
          <input
            type="file"
            name="icon"
            accept="image/png"
            onChange={handleFileChange}
            required
          />
        </label>
        <div className={s.prints_row}>
          <label>
            Prints das Telas (ou imagens editadas):
            <input
              type="file"
              name="screenshots"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              required
            />
          </label>

          <button>+</button>
        </div>

        <button type="submit">Enviar Aplicativo - $30,00</button>
      </form>
    </section>
  );
};

export default AppSubmissionForm;
