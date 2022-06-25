Tecnologias utilizadas:
Vite: 'Boilerplate' moderno de criação de projetos, alternativa ao 'CreateReactApp', e é construido com 'ESModules' nativos dos navegadores, que por sua vez aumenta a velocidade do servidor de desenvolvimento e também não tem perdas significativas de performance conforme a aplicação escala.
React: biblioteca muito utilizada por sua praticidade e facilidade de aprendizado, baseada em componentes que elimina repetição de código, pouco opinada, ecossitema grande e possibilidade(maior facilidade) de construir aplicativos nativos usando uma biblioteca que divide o mesmo 'codebase'.
Typescript: Tipagem de código que ajuda a descobrir erros durante o desenvolvimento e na escrita do código com 'autocomplete' proveniente da tipagem (evita procurar em toda a documentação de alguma 'lib' ou 'framework').
Styled Components: forma moderna de escrever CSS que por padrão só injeta os códigos CSS usados em cada componente, torna mais fácil manutenção e eliminação de código inutilizado, estilização adaptativa baseada nas props do componente ou de um 'context' e tem um pacote com tipagem que facilita a sua escrita.

Projeto:
Site com Layout simples para pesquisar os pokemons oficiais e informações correspondentes.
Imagens escolhidas em formato SVG em vez das imagens PNG caracterizadas como 'official-artwork' em razão de um tamanho menor de download(que pode afetar dispositivos não atuais ou internetes lentas).
Método de paginação simples, pois haverá outros métodos de busca mais eficientes, com possibilidade de avançar ou voltar uma página por vez e um display da página atual.

Para fazer:
Estilizar site, pensando em um layout hibrído(adaptativo e responsivo) para desktop, tablet e mobile.
Melhorar estruturas e lógica das funcões de fetch, get e set para uma melhor experiência de usuário, virtualmente sem 'loading'.
Busca por nome do pokemon com 'autocomplete'.
Selecionar e mostrar apenas os pokemons com o(s) tipo(s) selecionado(s).
Clicar no 'Card' e aparecer um Modal com informações detalhadas do pokemon selecionado.
