import "./header.css";
import { css } from "@emotion/css";
import { handleRoute, LOGO } from "../../config";
import IconSearch from "../../assets/images/search-elcomercio.svg";

const Header = (props) => {
  const progressBarFill = (scrollProgress) => css`
    height: 100%;
    background-color: red;
    width: ${scrollProgress}%;
    transition: width 0.3s ease-out;
  `;
  return (
    <header className="headerContainer" onClick={handleRoute}>
      <div className="topHeader">
        <div type="button" className="css-10nqdzz">
          <span className="css-1qt2np7"></span>
          <span className="css-1qt2np7"></span>
          <span className="css-1qt2np7"></span>
        </div>
        <img src={LOGO} />
        <img className="iconSearch" src={IconSearch} />
      </div>
      <div className="progressBar">
        <div className={progressBarFill(props.scrollProgress)}></div>
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
  );
};
export default Header;
