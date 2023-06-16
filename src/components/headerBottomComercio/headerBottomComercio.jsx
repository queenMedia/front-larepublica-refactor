import "./headerBottomComercio.css"
import "./headerBottomComercio.responsive.css"

import { bottonHeaderData } from "../../assets/utils/utils.headerbottomelcomercio"

export function ComercioHeaderBottom () {

    return(
        <div className="header-bottom-comercio">
            <ul>
                {bottonHeaderData.map((item,index) => {
                    return <li key={index}> <a href="/">{item}</a> </li>
                })}
            </ul>
        </div>
    )
}