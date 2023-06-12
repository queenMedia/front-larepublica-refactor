import "./comments.css";

export const comments = [
  {
    image: "https://pgenpro-test.s3.amazonaws.com/Comments/alanna.jpg",
    name: "Raquel Puente",
    description:
      "Las últimas semanas he estado operando con Bitcoin Code y he ganado USD/8,238. ¡Me encanta!",
    number: "13 . Me gusta",
    time: "Hace 12 minutos",
  },
  {
    image: "https://pgenpro-test.s3.amazonaws.com/Comments/amanda.jpg",
    name: "Sandra Jabugo",
    description:
      "Vi Bitcoin Code en el proyecto y me registré ayer, estoy ganando USD/89.",
    number: "6 . Me gusta",
    time: "Hace 13 minutos",
  },
];

export const Comment = (props) => {
  return (
    <>
      <div className="testimonial-container" key={props.key}>
        <img src={props.image} />
        <div className="testimonial-description">
          <p className="testimonial-name">{props.name}</p>
          <p className="testimonial-comment">{props.description}</p>
          <div className="testimonial-txt">
            <p>Responder.</p>
            <p>{props.number}</p>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
