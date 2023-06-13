import "./stickyFooter.css";
import { handleRoute, OFFER_NAME } from "../../config";
const StickyFooter = () => {
  return (
    <div className="stickyFooter" onClick={() => handleRoute("stickyFooter")}>
      <button>PRUEBA {OFFER_NAME} POR TI MISMO</button>
    </div>
  );
};

export default StickyFooter;
