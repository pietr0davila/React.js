function eventHandler() {
    let userNumber = prompt("Type a number (1 - 10)");
    let computerNumber = Math.floor(Math.random() * (10 - 1) + 1);
    
    return alert(`User number: ${userNumber} \nComputer number: ${computerNumber}`);
}

export default function RandomNumber() {
    return (
        <>
            <button onClick={ eventHandler }>Clique aqui</button>
        </>
    )
}