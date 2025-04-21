React possui dois tipos de componentes. componentes de classe e funcionais

funcionais

Todo código react deve ter pelo menos 1 componente renderizado, que é o app.js

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';

ReactDOM.createRoot(document.querySelector('#root')).render(<App />) <- Esse é o componente renderizado que contém todos os outros componentes
```

Para renderizar um componente: 
<Component />

Componentes em react são sempre iniciados com letra maiúscula para ajudar o react a diferenciar componentes de elementos HTML

Ao executar qualquer elemento JSX, o navegador faz a transpilação e transforma em HTML

