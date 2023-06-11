import "./sideTestimonial.css";

export const SideTestimonial = (props) => {
  return (
    <>
      <div className="sideTestimonial">
        <img src={props.src} alt="sometext" />
        <p>"{props.txt}"</p>
        <span>{props.name}</span>
      </div>
    </>
  );
};
