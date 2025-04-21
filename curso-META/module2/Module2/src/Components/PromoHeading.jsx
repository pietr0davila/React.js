import Promo from "./Promo.jsx";
import SideBar from "./SideBar.jsx";

const data = {
    heading: "Desconto de 66%",
    cta: "Clique aqui para saber mais"
}

function PromoHeading() {
    return (
        <div>
            <Promo 
            promo={ data.heading }
            cta={ data.cta }
            />
            <SideBar 
            promo={ data.heading }
            cta={ data.cta }
            />
        </div>
    )
}

export default PromoHeading;