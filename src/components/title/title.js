import "./title.css";
import { handleRoute } from "../../config";
export const Title = () => {
  return (
    <>
      <h1 onClick={handleRoute}>
        <u>INFORME ESPECIAL:</u> El último <br /> método de inversión de Martin
        Vizcarra <br /> ha dejado a los expertos sin palabras y a <br />
        los grandes bancos aterrorizados
      </h1>
    </>
  );
};
