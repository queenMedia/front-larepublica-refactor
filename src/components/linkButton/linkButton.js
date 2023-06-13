import "./linkButton.css";
import { LINK } from "../../config";
export const LinkButton = () => {
  return (
    <>
      <div className="linkButton">
        <h2>
          <a href={LINK} target="blank">
            CLIC PARA EMPEZAR AHORA
          </a>
        </h2>
      </div>
    </>
  );
};
