import "./App.css"
import ModeToggler from "./Components/ModeToggler.jsx"
import RandomNumber from "./Components/RandomNumber.jsx"
import PromoHeading from "./Components/PromoHeading.jsx"
function App() {
    // const ARROW_FUNCTION = () => alert("Arrow Function pré definida")
    // function EventHandling() {
    //     alert("Evento como props")
    // }
    return (
        <>
            <ModeToggler />
            <RandomNumber />     
            <PromoHeading />
        </>
            // <Counter onClick={ EventHandling } /><br/>
            // <button onClick={ function() { alert("Anomfunction ES5") }}>Anom ES5</button><br/>
            // <button onClick={() => alert("Arrow Function ES6")}>Anom ES6</button><br/>
            // <button onClick={ ARROW_FUNCTION }>Arrow function com definição no início do código</button><br/>
    )

}
// function Counter({ onClick }) {
//     return <button onClick={ onClick }>Onclick como props</button>
//}



export default App
