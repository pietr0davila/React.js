Todo componente tem uma prop chamada props.children

<Example>
    <h1>Hey there</h1>
</Example>
nesse caso, h1 é um elemtento filho (children) do componente Example. Na renderização do componente podemos passar children como propriedade nomeada (props)
Se quisermos adicionar um children (Um elemento que vai estar contido no elemento pai, Example por exemplo) poderiamos fazer isso tanto com tags html

`<Example children={ <Hello />} />`
ou 
`<Example children={ <Hello content="Hello, Carter" />} />`

enfim...