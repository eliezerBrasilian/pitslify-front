import fi1 from "../assets/fi_1.jpg";
import fi2 from "../assets/fi_2.jpg";
import fi3 from "../assets/fi_3.jpg";
import { ProjectDto } from "../types/ProjectDto";

import b1 from "../assets/bisc_1.jpg";
import b2 from "../assets/bisc_2.jpg";

import g1 from "../assets/ga_1.jpg";
import g2 from "../assets/ga_2.jpg";
import g3 from "../assets/ga_3.jpg";

import d1 from "../assets/d1_x1.png";
import d2 from "../assets/d1_x2.png";

import { Nicho } from "../enums/Nicho";
import { ProjectType } from "../enums/ProjectType";

import fo1 from "../assets/fo1.png";
import fo2 from "../assets/fo2.png";
import fo3 from "../assets/fo3.png";
import env from "./exposedEnv";

export const projectItems: ProjectDto[] = [
  {
    id: 1,
    images: [fi1, fi2, fi3],
    title: "Finanças",
    description:
      "Um aplicativo criado com carinho para você ter controle total sobre seu dinheiro. Através do kakeibo, você rastreia todos suas movimentações e consegue poupar mais dinheiro e viver mais tranquilamente.",
    githubLink: env.financasRepo,
    nicho: Nicho.FINANCE,
    testLink: env.financasGooglePlay,
    type: ProjectType.APP,
  },
  {
    id: 2,
    images: [b1, b2],
    title: "Biscoito da Sorte",
    description:
      "Um aplicativo de frases simples e amigável, para aquele momento em que você precisa só de uma frase de motivação para deixar o seu dia mais alegre",
    githubLink: env.fortuneCookieRepo,
    nicho: Nicho.ENTERNAIMENT,
    testLink: env.fortuneCookieGooglePlay,
    type: ProjectType.APP,
  },
  {
    id: 3,
    images: [g1, g2, g3],
    title: "Gamestate",
    description:
      "Esse aplicativo atende a usuários gamers que finalizam seus jogos e gostariam de um lugar para manter um registro do jogo zerado. Adicione o nome do jogo, capa e mais algumas informações e pronto, jogo registrado!",
    githubLink: env.gamestateRepo,
    nicho: Nicho.GAME,
    testLink: env.gamestateGooglePlay,
    type: ProjectType.APP,
  },
  {
    id: 4,
    images: [fo1, fo2, fo3],
    title: "FoodFacil Delivery",
    description:
      "Um site de delivery de salgados, robusto que calcula taxa de entrega dependendo da localização do usuário. Possui também pagamentos via pix e autenticação com Google. E foi pensado exclusivamente para celulares",
    githubLink: env.foodfacilWebRepo,
    nicho: Nicho.DELIVERY,
    testLink: env.foodfacilWeb,
    type: ProjectType.SITE,
  },
  {
    id: 5,
    images: [d1, d2],
    title: "Sistema de diárias - Prefeitura",
    description:
      "Esse é um sistema criado para a prefeitura de Brás Pires para automatizar marcações de veículos e pacientes. Isso garante uma redução em impressões de papeis e agiliza o processo",
    githubLink: env.diariasRepo,
    nicho: Nicho.HEALTH,
    testLink: env.diariasSite,
    type: ProjectType.SITE,
  },
  {
    id: 6,
    images: [""],
    title: "FoodFacil API",
    description:
      "API desenvolvida para o sistema de delivery da FoodFacil, sistema robusto com autenticação, e pagamentos via PIX",
    githubLink: env.foodFacilApiRepo,
    testLink: env.foodFacilApiDoc,
    nicho: Nicho.DELIVERY,
    type: ProjectType.API,
  },
  {
    id: 7,
    images: [""],
    title: "jetpack-compose-google-sign-in",
    description:
      "Biblioteca desenvolvida para facilitar a integração da autenticação com Google em aplicativos android criados com jetpack compose, ocultando códigos mais complexos do usuário",
    githubLink: env.libGoogleSignIn,
    nicho: Nicho.ALTHENTICATION,
    testLink: "",
    type: ProjectType.LIB,
  },
  {
    id: 8,
    images: [""],
    title: "consulta-diabete-api",
    description:
      "API que recebe uma lista de sintomas e retorna a chance do usuário possuir diabetes tipo 1 ou tipo 2",
    githubLink: env.consultaDiabeteApiRepo,
    nicho: "api simples" as Nicho,
    testLink: env.consultaDiabeteApiDoc,
    type: ProjectType.API,
  },

  {
    id: 9,
    images: [""],
    title: "swipeable-modal",
    description:
      "Biblioteca criada para permitir o uso de um Modal Arrastável e personalizável em aplicativos android utilizando react-native",
    githubLink: env.swipableModalRepo,
    nicho: "nicho de utilitários" as Nicho,
    testLink: "",
    type: ProjectType.LIB,
  },
  {
    id: 10,
    images: [""],
    title: "tasks-api",
    description: "API que permite autenticação de usuários e crud de tarefas",
    githubLink: env.tasksApiRepo,
    nicho: "nicho de utilitários" as Nicho,
    testLink: "",
    type: ProjectType.API,
  },
  {
    id: 11,
    images: [""],
    title: "jetpack-compose-brazilian-currency-visual-transformation",
    description:
      "Biblioteca desenvolvida para facilitar a formatação de input para a moeda brasileira em aplicativos android feitos com jetpack-compose",
    githubLink: env.currencyVisualTransformationRepo,
    nicho: "nicho de utilitários" as Nicho,
    testLink: "",
    type: ProjectType.LIB,
  },
];
