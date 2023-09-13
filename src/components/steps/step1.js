import "./step1.css";
import * as config from "../../config"
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
import { handleRoute } from "../../config";
export const Step1 = () => {
  return (
    <div className="step1-container" >
      <a className="step_one_container" onClick={() => handleRoute("step1")}>
        <p className="step_one_container_title">
          Paso 1
        </p>
        <p className="step_one_container_subtitle">
          Regístrate, es gratis
        </p>
        <img src={config.sideBarForm} alt="Paso 1" />
      </a>
      <br />
      <img src={B} alt="Paso 1" />
      <br />
      <img src={C} alt="Paso 1" />
    </div>
  );
};