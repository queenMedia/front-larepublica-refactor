import "./readMore.css";
import { useState } from "react" 
import arrowDown from '../../assets/images/icons/more-cbc.svg';
export const ReadMore = (props) => {
  const [buttonClass, setButtonClass] = useState("readMore-container");
  return (
    <>
        <button className={buttonClass} onClick={() =>{
            setButtonClass("readMore-none-display"); 
            props.onClick(true);
          }}>
          Leer el articulo completo
        </button>
    </>
  );
};
