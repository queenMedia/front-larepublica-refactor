import "./App.css";
import { Title } from "./components/title/title";
import { SubTitle } from "./components/subTitle/subTitle";
import { CharacterImage } from "./components/characterImage/characterImage";
import { SideTitle } from "./components/sideTitle/sideTitle";
import { SideTestimonial } from "./components/sideTestimonial/sideTestimonial";
import { LinkButton } from "./components/linkButton/linkButton";

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
          <LinkButton />
          <CharacterImage
            src={
              "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img2.jpg"
            }
            txt={
              "Martin Vizcarra revela nuevo secreto de inversión que ha hecho que cientos de personas en Perú se vuelvan muy ricas"
            }
          />
          <LinkButton />
          <div className="content-text">
            <h3>EN EXCLUSIVA CON MARTIN VIZCARRA</h3>
            <p>
              "Seguramente han oído hablar sobre esta nueva plataforma de
              inversiones con criptomonedas llamada Bitcoin Code que está
              ayudando a la gente promedio de América Latina, Asia y América del
              Norte a construir fortunas de la noche a la mañana. Es posible que
              lo vean con escepticismo porque suena demasiado bueno para ser
              verdad".
            </p>
            <p>Martin Vizcarra prosigue:</p>
            <p>
              "Yo lo entiendo porque me pasó exactamente lo mismo cuando me lo
              contó un amigo en el que confío mucho. Sin embargo, después de ver
              con mis propios ojos cuánto dinero estaba haciendo, tenía que
              probarlo yo mismo.
            </p>
            <p>
              Me alegra haberlo intentado, porque gracias a eso he hecho la
              mayor cantidad de dinero en mi vida, y de la forma más sencilla.
              Les hablo de decenas de miles de USD al día, en automático. Es
              literalmente la manera más rápida de hacer que te llueva dinero
              ahora mismo. Y no va a durar mucho después de que las muchas
              personas lo descubran. O de que los bancos lo destruyan para
              siempre".
            </p>
          </div>
          <CharacterImage
            src={
              "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img3.jpg"
            }
            txt={
              "Martin Vizcarra revela nuevo secreto de inversión que ha hecho que cientos de personas en Perú se vuelvan muy ricas"
            }
          />
          <div className="content-text">
            <h3>¿QUÉ ES EXACTAMENTE BITCOIN CODE Y CÓMO FUNCIONA?</h3>
            <p>
              La idea detrás de Bitcoin Code es bastante sencilla: Permitirles a
              las personas promedio unirse al boom de las criptomonedas, que
              sigue siendo la inversión más rentable del siglo XXI, a pesar de
              lo que piensa la mayoría de la gente.
            </p>
            <p>Martin Vizcarra prosigue:</p>
            <p>
              Aunque el precio del Bitcoin ha caído desde su máximo histórico,
              20.000 USD por Bitcoin, los inversionistas todavía se están
              enriqueciendo. ¿Por qué? Pues, porque hay miles de criptomonedas
              aparte del Bitcoin con las que se hacen transacciones que generan
              enormes ganancias a diario.
            </p>
            <p>
              Algunas de estas criptomonedas son Ripple, Ethereum, Monero y
              Zcash que todavía están generando más de 10,000% de ganancias para
              la gente común y corriente de América Latin
            </p>
            <p>
              Bitcoin Code te permite sacar provecho de todas estas
              criptomonedas, incluso en un mercado bajista. Utiliza inteligencia
              artificial (AI) para gestionar ventas, y ventas cortas por ti, y
              que puedas hacer dinero a toda hora, incluso mientras duermes.
            </p>
            <p>
              Bitcoin Code está respaldado por algunas de las mentes más
              brillantes de la historia en el área de la tecnología. Entre ellas
              tenemos a Richard Branson, Elon Musk y Bill Gates.
            </p>
          </div>
          <CharacterImage
            src={
              "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img5.jpg"
            }
            txt={
              "Bill Gates y Richard Branson conversaron sobre Bitcoin Code en CES 2021."
            }
          />
          <div className="content-text">
            <h3>¿QUÉ ES EXACTAMENTE BITCOIN CODE Y CÓMO FUNCIONA?</h3>
            <p>
              Estos genios de la tecnología han construido empresas
              multimillonarias para resolver problemas complejos en áreas tales
              como pagos en línea, computación y transporte. Ahora luchan contra
              la desigualdad económica que representa un problema global, al
              permitir que cualquier persona, sin importar que tan pobre o rica
              sea, haga suficiente dinero para disfrutar de una vida feliz y
              satisfactoria.
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
