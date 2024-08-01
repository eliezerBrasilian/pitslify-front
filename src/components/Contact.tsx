export const Contact = () => {
  return (
    <section id="contact">
      <h2>Alguma dúvida? Entre em Contato</h2>
      <form action="https://example.com/submit" method="post">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
