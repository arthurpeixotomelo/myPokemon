export default function Modal() {
  return (
    <dialog open>
      <p>
        <span>Nome do Pokemon</span>
        <span>ID do Pokemon</span>
      </p>
      <ul>
        <li>Tipo</li>
        <li>Tipo</li>
      </ul>
      {/* imagem do pokemon */}
      <p>Descrição</p>
      <p>
        <span>Peso</span>
        <span>Altura</span>
      </p>
      <p>
        Características
        <ul>
          <li>Gênero</li>
          <li>Saúde</li>
          <li>Ataque</li>
          <li>Defesa</li>
          <li>Ataque Especial</li>
          <li>Defesa Especial</li>
          <li>Velocidade</li>
          <li>Total</li>
        </ul>
      </p>
      <p>Pontos Fortes e Fracos</p>
    </dialog>
  )
}