import "./sideBar.css";
import { SideTitle } from "../../components/sideTitle/sideTitle";
import { SideTestimonial } from "../../components/sideTestimonial/sideTestimonial";
import { Step1 } from "../../components/steps/step1";
import { LINK } from "../../config";
const SideBar = () => {
  return (
    <>
      <SideTitle txt={"RESULTADOS DE NUESTROS LECTORES"} />
      <SideTitle txt={"GANANCIAS: S/26,952"} />
      <SideTestimonial
        txt={
          <p>
            "He estado usando <a href={LINK} target="_blank">Bitcoin Code</a> durante apenas 2 semanas y ya pagó mis futuras vacaciones por México."
          </p>
        }
        name={"Sofia Hernández Callao"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/victoriaPE.png"}
      />
      <SideTitle txt={"GANANCIAS: S/79,620"} />
      <SideTestimonial
        txt={
          <p>"¡Es tan fácil de usar, incluso para mí! No había hecho transacciones antes, pero ahora hago más de S/10,000 a la semana, ¡y amo mi vida!" </p>
        }
        name={"Jimena Alba Chiclayo"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/jimenaPE.png"}
      />
      <SideTitle txt={"GANANCIAS: S/79,620"} />
      <SideTestimonial
         txt={
          <p>
            "Ya hice S/33,000 en ganancias después de usar <a href={LINK} target="_blank">Bitcoin Code</a> durante apenas un mes. ¡Ya que puedo usarlo en mi laptop, he estado viajando por todo Perú mientras hago dinero!"
          </p>
        }
        name={"Alejandro Chávez Piura"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/alejandroPE.png"}
      />
      <SideTitle txt={"GANANCIAS: S/33,281"} />
      <SideTestimonial
        txt={
          <p>"Mi novio fue quien me contó de esto, me cambió la vida. He hecho más de S/7,000 a la semana durante más de un mes, con menos de 30 minutos de trabajo al día."</p>
        }
        name={"Victoria Pérez Huancayo"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/sofiaPE.png"}
      />
      <SideTitle txt={"GANANCIAS: S/44,080"} />
      <SideTestimonial
        txt={
          <p> "Me uní con mis mejores amigos y juntos hemos ganado muchísimo después de tan solo 3 semanas. El robot de las transacciones hace todo el trabajo por ti. Juntos hemos hecho más de S/44860 a la semana."</p>
        }
        name={"Alejandro Flores & Carlo Lima Arequipa"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/alecarlopng.png"}
      />
      <SideTitle txt={"GANANCIAS: S/210,529"} />
      <SideTestimonial
          txt={
            <p>
              "Al fin pude renunciar a mi trabajo, todo gracias a <a href={LINK} target="_blank">Bitcoin Code</a>. ¡He hecho tanto dinero, tan fácil!"
            </p>
          }
        name={"Mateo Guerra Trujillo"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/mateoPE.png"}
      />
      <SideTitle txt={"GANANCIAS: S/150,300"} />
      <SideTestimonial
     txt={
      <p>
        "Me registré en <a href={LINK} target="_blank">Bitcoin Code</a> hace un poco más de dos semanas. Convertí mi depósito inicial de S/1200 en S/20,787. Esto es mucho más de lo que gano en mi trabajo."
      </p>
    }
        name={"Santiago Sánchez Lima"}
        src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/santiagoPE.png"}
      />
      <SideTitle txt={"SIGUE ESTOS 3 SENCILLOS PASOS PARA EMPEZAR:"} />
      <Step1 />
    </>
  );
};
export default SideBar;
