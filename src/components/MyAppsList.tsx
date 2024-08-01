export const MyAppsList = () => {
  // Dados de exemplo para os aplicativos do usuário
  const myApps = [
    { id: 1, name: "App Exemplo 1", status: "Publicado" },
    { id: 2, name: "App Exemplo 2", status: "Em Revisão" },
  ];

  return (
    <section className="my-apps-list">
      <h2>Meus Aplicativos</h2>
      <ul>
        {myApps.map((app) => (
          <li key={app.id}>
            <h3>{app.name}</h3>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyAppsList;
