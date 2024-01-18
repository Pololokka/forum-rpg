[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![technology - React](https://img.shields.io/badge/React-orange) ![technology - JS](https://img.shields.io/badge/JavaScript-yellow) ![technology - TS](https://img.shields.io/badge/Typescript-blue)

# Forum RPG - Front

Front End do meu projeto de Fórum para mesas de RPG

## Tecnologias

- React
- JavaScript
- Typescript

## Escopo do projeto

### Login

Página inicial do projeto, nesta página o usuário insere e-mail e senha, e então é enviado uma requisição para o backend, a fim de validar o login. Se o login acontecer com sucesso, o front faz uma nova requisição para uma rota privada do back, que pega as informações do usuário, que então são salvas no context.

![Tela de Login](https://cdn.discordapp.com/attachments/621499803884584998/1197553260425396375/image.png?ex=65bbaf62&is=65a93a62&hm=21a42e4ec4d8627f3bd380add5fd172eb68d0cda3bfd5b4d8e385470ed83b60a&)

### Mesas

Segunda tela do projeto, é nesta etapa que são exibidas todas as mesas do usuário logado. O usuário então pode entrar em uma mesa específica, a fim de ver as postagens realizadas.

![Tela de Mesas](https://cdn.discordapp.com/attachments/621499803884584998/1197553380881608744/image.png?ex=65bbaf7f&is=65a93a7f&hm=51bed30c7fa092e0a7a3bbef1d6dbcf0b35b74ba946e9dc76e8caa53ae10772b&)

### Fórum

Terceira tela do fluxo principal, é aqui onde o usuário vê as interações específicas de uma dada mesa. O usuário pode acessar o fórum principal, assim como pode ver outros canais do mesmo grupo(no caso, Avisos do Mestre, e Leitura Geral) através da barra lateral. A barra lateral também permite que o usuário volte para a tela de mesas.

![Tela de Fórum - Postagens](https://cdn.discordapp.com/attachments/621499803884584998/1197553501702729809/image.png?ex=65bbaf9c&is=65a93a9c&hm=7fb03321075982df1b603ceb86d1e0d5a5a8edce9e7f7bf96d847c0db5e4cf04&)

No fim da página, o usuário encontra um campo de texto, para fazer suas postagens no canal atual, assim como pode controlar a página que está sendo exibida, e quantos posts por página devem ser exibidos.

![Tela de Fórum - Campo de Texto e Paginação](https://cdn.discordapp.com/attachments/621499803884584998/1197553574209663046/image.png?ex=65bbafad&is=65a93aad&hm=c8a24b0e4ff7cfa42df46f4d7fda0e5124bbeba55ce653a89a2d2bbd97c54390&)

## Futuro

Decidi acabar este projeto antes de incluir tudo que gostaria que tivesse nele, e antes de acabar todos os ajustes de UI e UX, pois estava mexendo nele há muito tempo, e preciso estudar mais algumas coisas.

No futuro, quando tiver um pouco de tempo, pretendo adicionar uma página de informações do usuário, onde o mesmo pode editar algumas coisas(como nome, foto, e etc). Também pretendo deixar a aba de "Avisos do Mestre" exclusiva para o Mestre postar(ou então, deixar que o Mestre escolha se os jogadores podem ou não postar conteúdo).

Por fim, também pretendo implementar a criação e edição de mesas pelo front, a fim de deixar esse processo mais fácil.

## Licença

Feito com a licença MIT

MIT License

Copyright (c) 2023 Vitor Bulbovas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
