import "./App.css";
import { Title } from "./components/title/title";
import { SubTitle } from "./components/subTitle/subTitle";
import { CharacterImage } from "./components/characterImage/characterImage";
import { SideTitle } from "./components/sideTitle/sideTitle";
import { SideTestimonial } from "./components/sideTestimonial/sideTestimonial";

function App() {
  return (
    <div className="container">
      <header className="headerContainer">
        <div className="topHeader">
          <div>menu</div>
          <img src="https://www.lps.martinviz.com/_app/immutable/assets/logo_lr_white-cb374dfd.svg " />
          <div>search</div>
        </div>
        <div className="bottomHeader">
          <div>ÚLTIMAS NOTICIAS</div>
          <div>POLÍTICA</div>
          <div>ECONOMÍA</div>
          <div>SOCIEDAD</div>
          <div>MUNDO</div>
          <div>DEPORTES</div>
          <div>ESPECTÁCULOS</div>
          <div>LaRepublica</div>
          <div>CINE Y SERIES</div>
          <div>DÓLAR</div>
          <div>SUSCRÍBETE</div>
        </div>
      </header>
      <body className="bodyContainer">
        <div className="content">
          <Title />
          <SubTitle />
          <img src="https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img4.jpg" />
          <CharacterImage
            src={
              "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img1.jpg"
            }
            txt={
              "Martin Vizcarra revela nuevo secreto de inversión que ha hecho que cientos de personas en Perú se vuelvan muy ricas"
            }
          />
          <div className="content-text">
            <p>
              El presidente de Perú, Martin Vizcarra, es famoso por no guardarse
              ningún secreto y por hablar simple y llanamente de como gana su
              dinero. Y siempre está ansioso por ayudar a la gente común.
            </p>
            <p>
              La semana pasada Martin Vizcarra fue entrevistado en el programa
              "Cara a Cara" y anunció una nueva "laguna" que, según él, puede
              hacer que cualquier persona sea millonaria en 3-4 meses. Martin
              Vizcarra animó a todas las personas en América Latina a que
              aprovechen esta increíble oportunidad antes de que los grandes
              bancos acaben con ella para siempre.
            </p>
            <p>
              Y, por supuesto, minutos después de que se acabara la entrevista,
              Banco de Crédito del Perú llamó para solicitar que no la
              publicaran... pero ya era demasiado tarde.
            </p>
            <h3>Esto fue lo que pasó exactamente:</h3>
            <p>
              El presentador de "Cara a Cara", Enrique Chávez, invitó a Martin
              Vizcarra al programa para que compartiera sus consejos sobre cómo
              generar riquezas y así fue como él reveló el gran secreto.
            </p>
            <p>
              "Lo que me ha hecho exitoso ha sido que aprovecho rápidamente las
              nuevas oportunidades, sin dudarlo. Y en este momento mi método #1
              para hacer dinero es un nuevo programa que hace transacciones
              automáticas con criptomonedas llamado Bitcoin Code. En toda mi
              vida no había visto una oportunidad tan increíble como esta, que
              te permite generar una fortuna en poco tiempo. Le recomiendo a
              todo el mundo que lo visite antes de que los bancos lo manden a
              cerrar."
            </p>
            <p>
              Enrique Chávez no lo podía creer cuando Martin Vizcarra sacó su
              teléfono y mostró a los televidentes cuánto dinero hace con este
              nuevo programa que está sorprendiendo a todo el mundo en Perú.
            </p>
          </div>
        </div>
        <div className="sidebar">
          <SideTitle txt={"RESULTADOS DE NUESTROS LECTORES"} />
          {/* number 1 */}
          <SideTitle txt={"GANANCIAS: S/26,952"} />
          <SideTestimonial
            txt={
              "He estado usando Bitcoin Code durante apenas 2 semanas y ya pagó mis futuras vacaciones por México."
            }
            name={"Sofia Hernández Callao"}
            src={
              "https://pgenpro-test.s3.amazonaws.com/fakeNames/victoriaPE.png"
            }
          />
          {/* number 2 */}
          <SideTitle txt={"GANANCIAS: S/79,620"} />
          <SideTestimonial
            txt={
              "¡Es tan fácil de usar, incluso para mí! No había hecho transacciones antes, pero ahora hago más de S/10,000 a la semana, ¡y amo mi vida!"
            }
            name={"Jimena Alba Chiclayo"}
            src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/jimenaPE.png"}
          />
          {/* number 3 */}
          <SideTitle txt={"GANANCIAS: S/79,620"} />
          <SideTestimonial
            txt={
              "Ya hice S/33,000 en ganancias después de usar Bitcoin Code durante apenas un mes. ¡Ya que puedo usarlo en mi laptop, he estado viajando por todo Perú mientras hago dinero!"
            }
            name={"Alejandro Chávez Piura"}
            src={
              "https://pgenpro-test.s3.amazonaws.com/fakeNames/alejandroPE.png"
            }
          />
          {/* number 4 */}
          <SideTitle txt={"GANANCIAS: S/33,281"} />
          <SideTestimonial
            txt={
              "Mi novio fue quien me contó de esto, me cambió la vida. He hecho más de S/7,000 a la semana durante más de un mes, con menos de 30 minutos de trabajo al día."
            }
            name={"Victoria Pérez Huancayo"}
            src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/sofiaPE.png"}
          />
          {/* number 5 */}
          <SideTitle txt={"GANANCIAS: S/44,080"} />
          <SideTestimonial
            txt={
              "Me uní con mis mejores amigos y juntos hemos ganado muchísimo después de tan solo 3 semanas. El robot de las transacciones hace todo el trabajo por ti. Juntos hemos hecho más de S/44860 a la semana."
            }
            name={"Alejandro Flores & Carlo Lima Arequipa"}
            src={
              "https://pgenpro-test.s3.amazonaws.com/fakeNames/alecarlopng.png"
            }
          />
          {/* number 6 */}
          <SideTitle txt={"GANANCIAS: S/210,529"} />
          <SideTestimonial
            txt={
              "Al fin pude renunciar a mi trabajo, todo gracias a Bitcoin Code. ¡He hecho tanto dinero, tan fácil!"
            }
            name={"Mateo Guerra Trujillo"}
            src={"https://pgenpro-test.s3.amazonaws.com/fakeNames/mateoPE.png"}
          />
          {/* number 7 */}
          <SideTitle txt={"GANANCIAS: S/150,300"} />
          <SideTestimonial
            txt={
              "Me registré en Bitcoin Code hace un poco más de dos semanas. Convertí mi depósito inicial de S/1200 en S/20,787. Esto es mucho más de lo que gano en mi trabajo."
            }
            name={"Santiago Sánchez Lima"}
            src={
              "https://pgenpro-test.s3.amazonaws.com/fakeNames/santiagoPE.png"
            }
          />
        </div>
      </body>
      <footer className="footer">
        <div>footer</div>
      </footer>
    </div>
  );
}

export default App;
