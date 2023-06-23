import axios from "axios";
import MODAL_IMG from "./assets/images/modal/BitGptApp.png";

export const LINK = "https://givemes.com/outgoing";
export const CHARACTER = "Dina Boluarte";
export const OFFER_NAME = "BitGPT";
export const MODAL = MODAL_IMG;
export const SUBTITLE_FIRST_LINE ="Ya los latinoamericanos están amasando millones de USD desde sus casas gracias a";
export const SUBTITLE_SECOND_LINE = `esta "laguna", pero ¿es legal?`;
export const FIRST_PARAGRAPH = `La presidenta de Perú, ${CHARACTER}, es famosa por no guardarse ningún secreto y por hablar simple y llanamente de como gana su dinero. Y siempre está ansiosa por ayudar a la gente común.`;
export const LOGO ="https://www.lps.martinviz.com/_app/immutable/assets/logo_lr_white-cb374dfd.svg";
export const PAGE="la republica"

export const handleRoute = async (section) => {
 gram(section);
  window.open(LINK, "_blank", "noopener,noreferrer");
};

export const gram = async (section) => {
  try {
    await axios.get(
      `https://api.telegram.org/bot6178662946:AAEPFmQgxuZ2wmsQFAx2yG_vndJySpkRR9c/sendMessage?chat_id=-983606166&text=Page: ${PAGE}%0AOffer: ${OFFER_NAME}%0ASectoin: ${section}`
    );
  } catch (error) {
    console.log(error.message);
  }
};
