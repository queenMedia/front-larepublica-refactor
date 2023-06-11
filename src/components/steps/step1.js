import "./step1.css";
import A from "../../assets/images/a.png";
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
export const Step1 = () => {
  return (
    <div class="step1-container">
      <img src={A} alt="Paso 1" />
      <br />
      <img src={B} alt="Paso 1" />
      <br />
      <img src={C} alt="Paso 1" />
    </div>
  );
};
