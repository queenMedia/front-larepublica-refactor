import { HeaderTopComercio } from "../../components/headerTopComercio/headerTopComercio"
import { HeaderLogoComercio } from "../../components/headerLogoComercio/headerlogocomercio"
import { ComercioHeaderBottom } from "../../components/headerBottomComercio/headerBottomComercio"

import "./comercioheader.css"
import "./comercioheader.responsive.css"

export function ComercioHeader () {

    return(
        <>
            <HeaderTopComercio />
            <HeaderLogoComercio />
            <ComercioHeaderBottom />
        </>
    )
}