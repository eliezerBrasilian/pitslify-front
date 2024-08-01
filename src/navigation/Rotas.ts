enum Rotas {
  LOGIN = "/login",
  HOME = "/",
  TELA_PERFIL = "/perfil",
  PROJETOS = "/meus-projetos",
  TELA_MONTAR_DIARIA = "/montar-diaria",
  REDES_SOCIAIS = "/onde-me-encontrar",
  USER_AREA = "/my-area",
  CHECKOUT = "/checkout",
}

// interface RouteItem {
//   name: string;
//   elementJsx: JSX.Element;
// }

// export const appRoutes: RouteItem[] = [
//   { name: Rotas.LOGIN, elementJsx: Home() },
// ];

// <Routes>
//         <Route path={Rotas.HOME} element={<Home />} />

//         <Route path={Rotas.USER_AREA} element={<UserArea />} />
//         <Route path={Rotas.LOGIN} element={<Login />} />
//       </Routes>

export { Rotas };
