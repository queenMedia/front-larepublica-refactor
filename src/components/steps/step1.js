import "./step1.css";
import A from "../../assets/images/a.png";
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
import { handleRoute } from "../../config";
export const Step1 = () => {
  return (
    <div className="step1-container" onClick={() => handleRoute("step1")}>
      <img src={A} alt="Paso 1" />
      <br />
      <img src={B} alt="Paso 1" />
      <br />
      <img src={C} alt="Paso 1" />
    </div>
  );
};
