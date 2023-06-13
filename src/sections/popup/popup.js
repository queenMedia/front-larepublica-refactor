import "./popup.css";
import { OFFER_NAME } from "../../config";
const Popup = () => {
  return (
    <dialog class="popUp-dialog">
      <section class="popUp-section">
        <article class="popUp-article">
          <button class="popUp-button" type="button"></button>
          <p class="popUp-p">
            <span class="popUp-span">¡No te lo pierdas!</span>
            <span class="popUp-span">
              Esta es la ÚLTIMA oportunidad de ingresar al
            </span>
            <a
              href="https://givemes.com/outgoing"
              class="popUp-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {OFFER_NAME}
            </a>
          </p>
          <button class="popUp-button" type="button">
            Empezar Ahora
          </button>
        </article>
      </section>
    </dialog>
  );
};
export default Popup;
