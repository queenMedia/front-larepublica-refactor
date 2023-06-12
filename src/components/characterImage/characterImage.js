import "./characterImage.css";
import { handleRoute } from "../../config";

export const CharacterImage = (props) => {
  return (
    <>
      <div className="img-with-text" onClick={handleRoute}>
        <img src={props.src} alt="sometext" />
        <p>
          <strong>{props.txt}</strong>
        </p>
      </div>
    </>
  );
};
