import "./stickyFooter.css";
import { handleRoute } from "../../config";
const StickyFooter = () => {
  return (
    <div className="stickyFooter" onClick={handleRoute}>
      <button>PRUEBA Bitcoin Code POR TI MISMO</button>
    </div>
  );
};

export default StickyFooter;
