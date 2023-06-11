import "./sideTitle.css";

export const SideTitle = (props) => {
  return (
    <>
      <div className="sideTitle-with-text">
        <div>{props.txt}</div>
        <span></span>
      </div>
    </>
  );
};
