import "./miniModal.css";
import { handleRoute } from "../../config";
const MiniModal = () => {
  return (
    <div className="miniModal" onClick={handleRoute}>
      <img src="https://www.lps.martinviz.com/_app/immutable/assets/widthdraw-0e399313.png" />
      <div>
        <p>Alguien de Peru acaba de retirar</p>
        <p>SOLO AHORA</p>
      </div>
    </div>
  );
};
export default MiniModal;
