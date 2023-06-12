import { useState } from "react";
import { css } from "@emotion/css";

import "./header.css";
import { handleRoute } from "../../config.js";
import IconSearch from "../../assets/images/search-elcomercio.svg";

export function Header(){

    const [scrollProgress, setscrollProgress] = useState(0);

    const progressBarFill = (scrollProgress) => css`
        height: 100%;
        background-color: red;
        width: ${scrollProgress}%;
        transition: width 0.3s ease-out;
    `;

    window.addEventListener("scroll", (event) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
        setscrollProgress(scrollProgress);
    });

    return(
        <header className="headerContainer" onClick={handleRoute}>
            <div className="topHeader">
            <div type="button" className="css-10nqdzz">
                <span className="css-1qt2np7"></span>
                <span className="css-1qt2np7"></span>
                <span className="css-1qt2np7"></span>
            </div>
            <img src="https://www.lps.martinviz.com/_app/immutable/assets/logo_lr_white-cb374dfd.svg" />
            <img className="iconSearch" src={IconSearch} />
            </div>
            <div className="progressBar">
            <div className={progressBarFill(scrollProgress)}></div>
            </div>
            <div className="bottomHeader">
            <div>ÚLTIMAS NOTICIAS</div>
            <div>POLÍTICA</div>
            <div>ECONOMÍA</div>
            <div>SOCIEDAD</div>
            <div>MUNDO</div>
            <div>DEPORTES</div>
            <div>ESPECTÁCULOS</div>
            <div>LaRepublica</div>
            <div>CINE Y SERIES</div>
            <div>DÓLAR</div>
            <div>SUSCRÍBETE</div>
            </div>
        </header>
    )
}
