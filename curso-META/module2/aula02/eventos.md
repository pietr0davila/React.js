Eventos são gerados pelo navegador e podem ser de click ou até mudança de conteúdo, no html eventos são passados usando

`<button onclick="onclick()">clique</button>`

em js usamos a sintaxe 
`<button onClick={eventHandler}>Clique</button>`

Sendo onclick() e eventHandler funções

Podemos definir uma função dentro de onCLick

usando funções anônimas ES5

`<button onClick={ function(){console.log("teste") }}>`