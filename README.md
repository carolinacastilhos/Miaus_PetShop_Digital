<h1 align="center"> MiAus - A PetShop online do seu pet!</h1>

A plataforma online em desenvolvimento é um sistema web de comércio de produtos e
serviços para o mercado de Petshop de nome fictício MiAus. Este sistema web tem como objetivo
permitir que os usuários possam comprar os produtos de suas casas, assim como agendar ou
contratar serviços da plataforma de maneira online. Os produtos disponíveis para venda são
ração seca e ração úmida, com pelo menos duas opções de cada categoria. Já os serviços
oferecidos são o de banho e tosa, incluindo as categorias para gatos e cães de pequeno e grande
porte.

[MiAus - A PetShop online do seu pet!](https://miaus-pet-shop-digital.vercel.app/)

![página inicial](https://github.com/carolinacastilhos/Miaus_PetShop_Digital/assets/117789578/3f346cae-37e4-4781-898d-dfb42e28ef71)

Até o momento, o sistema web MiAus apresenta o desenvolvimento inicial de cinco telas
essenciais e uma complementar: "Página Inicial", "Produtos", "Serviços", "Cadastro", "Login" e "Em Construção". A navegação entre essas páginas é
facilitada por meio da barra de navegação (navbar). Além disso, tanto a "Página Inicial" quanto as
telas "Produtos" e "Serviços" estão equipadas com uma barra de pesquisa abrangente para proporcionar
uma experiência de usuário mais completa. Em todas as páginas, também foi implementado um
rodapé (footer) que contém informações de contato para facilitar a comunicação com os
usuários.

## Estrutura de Pastas

Para uma adequada organização, os arquivos do projeto estão estruturados nas seguintes
pastas:

- assets: nesta pasta estão os recursos utilizados para o desenvolvimento do sistema: - css: aqui estão os arquivos css das estilizações separadas de cada página
  e/ou elemento, devidamente identificadas; - img: aqui estão as imagens utilizadas na plataforma, como imagens de
  produtos, promocionais, ilustrativas, entre outras;
- js: a pasta js contém todos os arquivos javascript desenvolvidos.
- pages: esta pasta contém os arquivos html de todas as páginas desenvolvidas da
  plataforma até o momento, exceto o index;
- index.html: o arquivo index.html fica na raiz (root) da aplicação, sendo o arquivo da
  “Página inicial”;

## Tecnologias Utilizadas

Para a criação inicial das telas, foi empregado o software Figma para prototipagem. Na
primeira fase de desenvolvimento, foi utilizado uma variedade de tecnologias e ferramentas,
incluindo HTML (HyperText Markup Language), CSS (Cascading Style Sheets), Bootstrap, que é
um framework de código aberto que fornece componentes e estilos predefinidos para agilizar o
desenvolvimento web responsivo, e a IDE Visual Studio Code.

Para aprimorar o design e a usabilidade, foi incorporado recursos como FontAwesome, uma
biblioteca de ícones que permite a inclusão de ícones vetoriais em projetos web, e o Google
Fonts, uma coleção de fontes tipográficas gratuitas fornecida pelo Google. O JavaScript
empregado até o momento foi o fornecido pelo Bootstrap e algumas validações de login.

À medida que o desenvolvimento das demais páginas e funcionalidades da
plataforma for avançando, a intenção é realizar a migração do sistema para o React, colocando ênfase na
reutilização de componentes. Além disso, planeja-se implementar o Node.js no back-end para
aprimorar a eficiência e escalabilidade da plataforma.

## Testes e Validações

Os formulários desempenham um papel crítico no desenvolvimento de plataformas 
online, pois são a porta de entrada para a obtenção de informações e cadastros dos usuários. 
É essencial garantir que esses formulários sejam cuidadosamente projetados e validados para 
a entrada precisa dos dados.
 Nos códigos HTML das páginas "Login" e "Cadastro", foram incorporadas verificações nos 
campos, incluindo senha e CPF, para assegurar a precisão das informações inseridas. Além 
disso, esses campos foram marcados como obrigatórios (required), tornando-se um requisito 
essencial para o processo de cadastro e login, conforme exemplificado abaixo:

![WhatsApp Image 2023-09-24 at 02 53 48](https://github.com/carolinacastilhos/Miaus_PetShop_Digital/assets/117789578/2b5109c4-4031-455c-b358-44aca5315bbb)

![WhatsApp Image 2023-09-24 at 02 54 59](https://github.com/carolinacastilhos/Miaus_PetShop_Digital/assets/117789578/63a76f29-786f-4a02-838d-497dddc737d8)

A validação foi implementada principalmente através do HTML, conforme exemplificado 
acima. No entanto, no login também foi realizada a validação através do Javascript, com a função 
logar() no arquivo script.js, que é chamada no momento que o usuário clica o botão “Entrar” devido ao atributo onClick no HTML: 

![WhatsApp Image 2023-09-24 at 01 56 28](https://github.com/carolinacastilhos/Miaus_PetShop_Digital/assets/117789578/778fe701-03e9-4911-ba60-d3b2aab6552a)

![WhatsApp Image 2023-09-24 at 01 56 49](https://github.com/carolinacastilhos/Miaus_PetShop_Digital/assets/117789578/d34390e8-73be-4f29-a97b-451c2ab3461f)

Esta função permite que seja validada a entrada do login quando o campo de email e a senha são iguais 
a “admin123” emitindo o alerta "Login realizado com sucesso! Você receberá um e-mail de confirmação." e redirecionando à página inicial.
Caso contrário, enquanto o email de entrada e a senha não forem iguais à "admin12", haverá a 
emissão do alerta “Usuário ou senha incorretos.”. A validação do formulário de cadastro 
atualmente só foi realizada a nível de HTML, mas será desenvolvida posteriormente a outros 
níveis, garantindo a integridade e a precisão dos dados.
