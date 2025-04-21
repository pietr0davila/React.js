Navegadores não entendem linguagem JSX, principalmente os mais antigos, caso você envie um arquivo com sintaxe jsx para o seu navegador, ele não funcionaria, por isso você precisa traduzir código react --> JavaScript Puro usando o processo de transpilação. Por exemplo

```jsx
function Heading(props) {
    return <h1>{ props.title }</h1>;
}
```
transpilado ficaria:
```js
React.createElement("h1", null, props.title);
```

