import axios from "axios";

export const LINK = "https://givemes.com/outgoing";
export const url_bucket= "https://cmps-assets.s3.amazonaws.com/prelanders";
export const CHARACTER = "Martin Vizcarra";
export const OFFER_NAME = "Bitcoin360AI";
export const offer_key_name= "bitcoin_360_ai";
export const character_key_name = "martin_vizcarra";
export const language = "spanish";
export const currencyCode = "pe";
export const countryCode = "per";
export const Img1 = `${url_bucket}/sharing/characters/${character_key_name}/img1.webp`;
export const Img2 = `${url_bucket}/sharing/characters/${character_key_name}/img2.webp`;
export const Img3 = `${url_bucket}/sharing/characters/${character_key_name}/img3.webp`;
export const TableImg = `${url_bucket}/${offer_key_name}/tables/${language}/${countryCode}.webp`;
export const TopBannerImg = `${url_bucket}/sharing/banners/${currencyCode}2.webp`;
export const BillGatesImg = `${url_bucket}/sharing/billgates/${offer_key_name}.webp`;
export const FBPostImg = `${url_bucket}/sharing/posts/${currencyCode}.webp`;
export const GIFImg = `${url_bucket}/sharing/gifs/${language}/${currencyCode}.webp`;
export const FamilyImg = `${url_bucket}/sharing/family/${currencyCode}.webp`;
export const CheckImg = `${url_bucket}/sharing/checks/${currencyCode}.webp`;
export const OfferBannerImg = `${url_bucket}/${offer_key_name}/banners/${currencyCode}.webp`;
export const Step2Img = `${url_bucket}/sharing/steps/${language}/pen/2.webp`;
export const Step3Img = `${url_bucket}/sharing/steps/${language}/pen/3.webp`;
export const MODAL = `${url_bucket}/${offer_key_name}/modal/modal.webp`;
export const formSideBar = `${url_bucket}/${offer_key_name}/forms/${language}.webp`;
export const sideBarForm = `${url_bucket}/${offer_key_name}/forms/${currencyCode}.webp`;
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