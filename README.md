# Pokédex

Este é um projeto de uma aplicação React que consome a [API do Pokemon](https://pokeapi.co/). Ele foi proposto como desafio durante as aulas do curso DevQuest.
___

## Captura de tela

![](src/images/pokedex.gif)
___

## Funcionalidades

- Exibição de uma listagem com 10 pokemons iniciais.

- Carregamento adicional de 10 pokemons ao clicar no botão "Load more".

- Visualização de informações detalhadas de um pokemon específico.

- Exibição da imagem, nome, lista de movimentos, lista de habilidades e tipo do pokemon na página de detalhes.

- Alternância entre temas claro e escuro.
___

## Ferramentas utilizadas

- React.js: escolhido como biblioteca principal para o desenvolvimento da aplicação.

- Context API: foi utilizada para gerenciar o tema claro e escuro da aplicação, permitindo o compartilhamento desse estado entre os componentes.

- Styled-components: essa biblioteca foi escolhida para a estilização dos componentes.

- React Router DOM: foi utilizado para a navegação entre as páginas da aplicação.

- JavaScript: foi utilizado como a linguagem de programação principal para a lógica e manipulação dos dados.
___

## Decisões adotadas

- Organização do código: foi estruturado em componentes reutilizáveis e separados por responsabilidades, buscando facilitar a manutenção e escalabilidade da aplicação.

- Utilização de Hooks: foram utilizados os Hooks, como o useState e useEffect, para gerenciar o estado da aplicação e controlar o ciclo de vida dos componentes.

- Requisições assíncronas: foram implementadas utilizando as funcionalidades fetch e async/await, permitindo a obtenção dos dados necessários para exibição na aplicação.

- Responsividade: A aplicação foi desenvolvida com responsividade em mente, utilizando técnicas como CSS flexbox e media queries para garantir uma boa experiência em diferentes tamanhos de tela.
___

## Executando o projeto

1. Clone este repositório em seu computador.

2. Abra o terminal ou prompt de comando e navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para instalar as dependências do projeto:

        npm install

4. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação:

        npm start