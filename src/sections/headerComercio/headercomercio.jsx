import { NavbarComercio } from "../../components/headerTopComercio/headerTopComercio"
import { HeaderLogoComercio } from "../../components/headerLogoComercio/headerlogocomercio"
import { ComercioHeaderBottom } from "../../components/headerBottomComercio/headerBottomComercio"

import "./headercomercio.css"
import "./headercomercio.responsive.css"


export function ComercioHeader () {

    return(
        <>
            <section className="header-comercio">
                <nav className="nav-container">
                    <NavbarComercio />     
                </nav>
            </section>
            <HeaderLogoComercio />
            <ComercioHeaderBottom />
        </>
    )
}