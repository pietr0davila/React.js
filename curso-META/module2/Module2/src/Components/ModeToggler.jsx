export default function ModeToggler() {
    let isLightMode = true
    const LIGHT_MSG = <h1>Light mode ligado</h1>
    const DARK_MSG = <h1>Dark mode ligado</h1>
    return (
        <div>
            { isLightMode ? LIGHT_MSG : DARK_MSG }  
            <button onClick={ EventHandler }>Clique</button>
        </div>
    )

    function EventHandler() {
        isLightMode = !isLightMode
    }
}