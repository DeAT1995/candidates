# Candidatos - Aplicação de Cadastro e Gerenciamento de Candidatos
Este é um projeto de uma aplicação web para cadastrar e gerenciar candidatos. A aplicação permite o cadastro de novos candidatos, exibição dos candidatos aprovados e a possibilidade de agendar entrevistas.

# Tecnologias utilizadas
React: Uma biblioteca JavaScript para construir interfaces de usuário.
React Router: Biblioteca para gerenciar rotas na aplicação.
React Bootstrap: Framework de UI que utiliza o Bootstrap para criar componentes estilizados.
Axios: Cliente HTTP para fazer requisições à API backend.
Bootstrap: Framework CSS para estilização da aplicação.
Estrutura do projeto

O projeto está dividido em vários arquivos e diretórios. A estrutura básica do projeto é a seguinte:

java
Copy code
├── src
│   ├── api
│   │   └── api.js
│   ├── pages
│   │   └── Cadastro.js
│   ├── utils
│   │   └── Modal.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── public
│   ├── index.html
│   └── ...
├── package.json
└── ...

O diretório src contém o código-fonte da aplicação.
O diretório api contém o arquivo api.js, que configura a conexão com a API backend.
O diretório pages contém o arquivo Cadastro.js, que define o componente de cadastro e gerenciamento de candidatos.
O diretório utils contém os arquivos Modal.js, que são componentes reutilizáveis para exibir modais na aplicação.
O arquivo App.js é o componente raiz da aplicação.
O arquivo index.js é o ponto de entrada da aplicação, onde é renderizado o componente raiz.
O arquivo routes.js define as rotas da aplicação utilizando o React Router.
O diretório public contém o arquivo index.html e outros arquivos estáticos da aplicação.
O arquivo package.json contém as dependências e scripts do projeto.

# Funcionalidades
A aplicação possui as seguintes funcionalidades:

Cadastro de candidatos: Permite cadastrar novos candidatos informando o nome.
Exibição dos candidatos: Mostra os candidatos aprovados em uma tabela.
Agendamento de entrevista: Permite agendar uma entrevista para um candidato.
Aprovação de candidato: Permite aprovar um candidato.
Desqualificação de candidato: Permite desqualificar um candidato.

# Configuração e execução
Clone o repositório do projeto para sua máquina local.
Acesse o diretório raiz do projeto pelo terminal.
Execute o comando npm install para instalar as dependências do projeto.
Edite o arquivo api.js no diretório src/api e defina a URL base da API backend.
Execute o comando npm start para iniciar a aplicação.
Acesse a aplicação em seu navegador através do endereço http://localhost:3000.

# Considerações finais
Este projeto é uma aplicação simples de cadastro e gerenciamento de candidatos, utilizando tecnologias web modernas. É possível estender e personalizar a aplicação de acordo com as necessidades específicas do projeto.

Lembre-se de adequar a configuração da API backend de acordo com o ambiente de desenvolvimento e produção. Certifique-se de possuir uma API backend funcionando corretamente antes de executar esta aplicação.

Divirta-se explorando e desenvolvendo novas funcionalidades nesta aplicação de gerenciamento de candidatos!

# Importante:
Para que a aplicação funcione corretamente, é necessário integrá-la a uma API backend. A URL base da API backend deve ser configurada no arquivo api.js localizado no diretório src/api.

Certifique-se de clonar e configurar corretamente a API backend, disponível no repositório ***link.com***, antes de executar esta aplicação. A API backend é responsável por fornecer os dados e funcionalidades necessárias para o funcionamento da aplicação de gerenciamento de candidatos.

Siga as instruções de instalação e execução da API backend disponíveis em seu respectivo repositório antes de prosseguir com a execução da aplicação frontend.

Após configurar corretamente a API backend, você poderá iniciar a aplicação frontend executando o comando npm start. Certifique-se de que a API backend esteja em execução para que a aplicação frontend possa se comunicar corretamente com ela.

Divirta-se explorando e desenvolvendo novas funcionalidades nesta aplicação de gerenciamento de candidatos integrada à sua API backend!