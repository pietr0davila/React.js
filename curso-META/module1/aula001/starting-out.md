# Como funcion ao React
O react é muito chamado de biblioteca ao invés de framework por que não opina na estrutura de pastas dos arquivos de configuração. Ele costuma regrar a linguagem de programação e na criação dos componentes 

Para entender como o react funciona precisamos entender como webSites padrão funciona.

## COmo uma página funciona

Temos um cliente (Seu navegador). esse cliente solicita recursos, normalmente pela barra de pesquisa do navegador.

![search Bar](../content/aula001/searchBar.png)

Do outro lado temos o servidor que armazena dados, quando o cliente solicita recursos ao servidor, o servidor provê uma cópia do website 

Hoje essa não é a melhor abordagem por que sites evoluíram e se tornaram mais interativos
Mais interatividade aumenta o código js escrito -> mais javascript aumenta a complexxidade -> complexidade aumenta a quantidade de bugs.

Além disso, um site interativo feito em JS significa que você vai precisar manipular mt o DOM 

## Como uma página react funciona
React é baseado na renderização do client (Client-size render).
O react solicita dados a uma api, essa api é responsável por devolver os dados. O react usa esses dados para alterar partes específicas do código com base nos dados sem precisar recarregar a página

# O que é react
React.js é uma biblioteca javascript de código-aberto criada para desenvolvimento de interface do usuário (UI ou User Interface).
React não é um framework por que não podemos criar uma aplicação full-stack usando somente ele
React permite a criação de aplicações complexas que mudam dados conforme o necessário sem recarregar a página
# Por que aprender react?
React é uma linguagem criada pela equipe do facebook
React e simples e usa uma sintaxe especial JSX, basicamente javascript + XML = JSX. JSX permite a criação de componentes react só com HTML e JS, ou seja, você n precisa aprender uma linguagem de programação nova (só a sintaxe do react e JS)
React também pode ser usado para criação do front-end em aplicações mobile usando react native
# Baseado em components
React é baseada em componentes. Componentes são pequenas parcelas de código com uma função especifica e uma aplicação react é uma aplicação com vários componentes que trabalham em conjunto.
COmponentes são reutilizáveis, então você pode criar um componente e usar ele depois se necessário