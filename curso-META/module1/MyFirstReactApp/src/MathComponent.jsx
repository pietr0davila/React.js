export default function MathComponent(props) {
    const SUM = props.n1 + props.n2
    const TIMES = props.n1 * props.n2
    return (
        <>
            <h1 style={{textAlign:"center"}}> Operações matemáticas: <br /></h1>
            <h2> { props.n1 } + { props.n2 } = { SUM }</h2>
            <h2> Arredondamento para baixo: { props.floor }</h2>
            <h2> { props.n1 } x { props.n2 } = { TIMES }</h2>
            <h2> Arredondamento pra cima = { props.ceil }</h2>

        </>
    )
}