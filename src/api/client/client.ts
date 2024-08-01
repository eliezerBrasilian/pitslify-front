import axios from "axios";

// const apiLocal = axios.create({
//   baseURL: `http://localhost:5001/pitslify/api/v1`,
// });
// const api = apiLocal;

const apiProd = axios.create({
  baseURL: `https://foodfacil.site/pitslify/api/v1`,
});

export const getConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const api = apiProd;
export { api };
