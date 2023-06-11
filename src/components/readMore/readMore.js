import "./readMore.css";

export const ReadMore = (props) => {
  return (
    <>
      <div className="readMore-container">
        <button onClick={() => props.onClick(true)}>
          Leer el articulo completo
        </button>
      </div>
    </>
  );
};
