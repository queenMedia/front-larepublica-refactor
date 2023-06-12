import "./sideTestimonial.css";
import { handleRoute } from "../../config";
export const SideTestimonial = (props) => {
  return (
    <>
      <div className="sideTestimonial" onClick={handleRoute}>
        <img src={props.src} alt="sometext" />
        <p>"{props.txt}"</p>
        <span>{props.name}</span>
      </div>
    </>
  );
};
