import "./characterImage.css";

export const CharacterImage = (props) => {
  return (
    <>
      <div className="img-with-text">
        <img src={props.src} alt="sometext" />
        <p>
          <strong>{props.txt}</strong>
        </p>
      </div>
    </>
  );
};
