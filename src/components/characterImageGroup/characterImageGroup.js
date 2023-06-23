import "./characterImageGroup.css";
import { handleRoute } from "../../config";

export const CharacterImageGroup = (props) => {
  return (
    <div className="image_group">
      <a className="image_responsive_60" onClick={() => handleRoute("content")}>
      <img src={props.img} alt="Img2" className="image_responsive_100" />
      </a>
      <a className="image_responsive_30" onClick={() => handleRoute("content")}>
        <img
          src={props.img2}
          alt="ImgTransactions"
          className="image_responsive_100"
        />
      </a>
    </div>
  );
};
