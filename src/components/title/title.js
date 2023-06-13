import "./title.css";
import { handleRoute, CHARACTER } from "../../config";
export const Title = () => {
  return (
    <>
      <h1 className="title" onClick={handleRoute}>
        <u>INFORME ESPECIAL:</u> El último <br /> método de inversión de{" "}
        {CHARACTER} <br /> ha dejado a los expertos sin palabras y a <br />
        los grandes bancos aterrorizados
      </h1>
    </>
  );
};
