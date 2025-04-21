export default function SideBar(props) {
    return (
    <div>
        <h6>Desconto de { props.promo } </h6>
        <h6>{ props.cta }</h6>
    </div>
    )
}