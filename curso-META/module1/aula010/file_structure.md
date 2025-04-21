Um projeto react é composto por 

Um node_modules, que é o diretório onde os módulos do node são acessados
A pasta public, com os assets do site (.css, robots, .svg....)
e SRC ou source, que é o código fonte, ou seja, arquivos jsx, componentes

Dos arquivos comuns da pasta source:
app.jsx é o componente primário que executa todos os outros componentes
Index/main.jsx (Dependendo de como a instalação do react aconteceu) é o script que renderiza o conteúdo de app
App.css contém os estilos dos componentes de app e main/index.css tem os estilos globais da aplicação
App.test.js, reportWebVitals.js e setupTests.js São arquivos relacionado a performace dos testes da aplicação

Os arquivos package.json e ajuda o npm/yarn a reconstruir a aplicação em outro dispositivo ou re-instalar a pasta node_modules se excluida.
O package-lock.json/yarn.lock contém a lista das dependências da aplicação e é usado para que o package.json construa os arquivos corretos