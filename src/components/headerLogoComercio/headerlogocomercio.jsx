import "./headerlogoComercio.css"
import "./headerlogoComercio.responsive.css"

import logo from "../../assets/images/logoElComercio.png"

export function HeaderLogoComercio () {

    return(
        <header className="headerlogo-comercio">
            <div className="logo-content">
                <a className="a-logo" href="/">
                    <img src={logo} alt="img logo el comercio" />
                </a>
                <a className="btn-suscribe" href="/">Suscríbete</a>
            </div>
        </header>
    )
}