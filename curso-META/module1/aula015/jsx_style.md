Existem várias forrmas de adicionar estilo em JSX
A mais fácil é colocando a tag link no head d0o html, estilizando o css e acessando elemntos class com className.
Outra forma é com estilos inline
`<h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>`
ou até com variáveis
```jsx
const styles = {
    color: "tomato",
    fontSize: "40px"
}
```
O uso dessa abordagem torna os componentes autônomos, pq vêm com seus próprios estilos, mas também torna um pouco mais difíceis de manter.

