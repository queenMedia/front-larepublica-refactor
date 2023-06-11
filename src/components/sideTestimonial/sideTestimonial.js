import "./sideTestimonial.css";

export const SideTestimonial = (props) => {
  return (
    <>
      <div class="img-with-text">
        <img src={props.src} alt="sometext" />
        <p>{props.txt}</p>
      </div>
    </>
  );
};
