
export default function Header() {
  const Title = "<strong>Meu querido diário</strong>";

  return (
    <div className="container">
      <h1>Diário da fome emocional</h1>
      {/* Exibindo string como HTML puro */}
      <div dangerouslySetInnerHTML={{ __html: Title }} />
    </div>
  );
}
