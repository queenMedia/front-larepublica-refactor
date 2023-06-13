import "./App.css";
import { useState } from "react";
import { Title } from "./components/title/title";
import { SubTitle } from "./components/subTitle/subTitle";
import { CharacterImage } from "./components/characterImage/characterImage";
import { LinkButton } from "./components/linkButton/linkButton";
import { ReadMore } from "./components/readMore/readMore";
import SideBar from "./sections/sideBar/sideBar";
import MainFooter from "./sections/mainFooter/mainFooter";
import StickyFooter from "./sections/stickyFooter/stickyFooter";
import Header from "./sections/header/header";
import { Comment, comments } from "./sections/comments/comments.js";
import Popup from "./components/popup/popup.js";
import MiniModal from "./components/miniModal/miniModal";
import { LINK, handleRoute, CHARACTER } from "./config";
import Image1 from "./assets/images/character/image1.png";
import Image2 from "./assets/images/character/image2.png";
import Image3 from "./assets/images/character/image3.png";

function App() {
  const [readMore, setReadmore] = useState(false);
  const [scrollProgress, setscrollProgress] = useState(0);

  window.addEventListener("scroll", (event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setscrollProgress(scrollProgress);
  });

  return (
    <div className="container">
      <Header scrollProgress={scrollProgress} />
      <body className="bodyContainer">
        <div className="content">
          <Title />
          <SubTitle />
          <img
            className="fimage"
            src="https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img4.jpg"
            alt="someImage"
          />
          <CharacterImage
            src={Image1}
            txt={
              "Martin Vizcarra revela nuevo secreto de inversión que ha hecho que cientos de personas en Perú se vuelvan muy ricas"
            }
          />
          <div className="content-text">
            <p>
              El ex presidente de Perú, {CHARACTER}, es famoso por no guardarse
              ningún secreto y por hablar simple y llanamente de como gana su
              dinero. Y siempre está ansioso por ayudar a la gente común.
            </p>
            <p>
              <a href={LINK} target="_blank">
                {" "}
                La semana pasada {CHARACTER} fue entrevistado en el programa
                "Cara a Cara" y anunció una nueva "laguna"{" "}
              </a>{" "}
              que, según él, puede
              <strong>
                {" "}
                hacer que cualquier persona sea millonaria en 3-4 meses.
              </strong>{" "}
              {CHARACTER} animó a todas las personas en América Latina a que
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
            <p className="paragraph-italic">
              "Lo que me ha hecho exitoso ha sido que aprovecho rápidamente las
              nuevas oportunidades, sin dudarlo.{" "}
              <a href={LINK} target="_blank">
                Y en este momento mi método #1 para hacer dinero es un nuevo
                programa que hace transacciones automáticas con criptomonedas
                llamado Bitcoin Code
              </a>
              . En toda mi vida no había visto una oportunidad tan increíble
              como esta, que te permite generar una fortuna en poco tiempo. Le
              recomiendo a todo el mundo que lo visite antes de que los bancos
              lo manden a cerrar."
            </p>
            <p>
              Enrique Chávez no lo podía creer cuando {CHARACTER} sacó su
              teléfono y mostró a los televidentes cuánto dinero hace con este
              nuevo programa que está sorprendiendo a todo el mundo en Perú.
            </p>
          </div>
          <LinkButton />
          <CharacterImage src={Image2} txt={""} />
          <div className="content-text">
            <p>
              El tiempo del programa se agotó antes de que pudiera explicar todo
              con lujo de detalles, así que conseguimos una entrevista exclusiva
              con el mismísimo {CHARACTER} para aprender más sobre esta
              oportunidad que está generando controversias.
            </p>
          </div>
          <LinkButton />
          <div className="content-text">
            <h3 className="title-2">EN EXCLUSIVA CON {CHARACTER}</h3>
            <p className="paragraph-italic">
              "Seguramente han oído hablar sobre esta{" "}
              <a href={LINK} target="_blank">
                nueva plataforma
              </a>{" "}
              de inversiones con criptomonedas llamada{" "}
              <a href={LINK} target="_blank">
                Bitcoin Code
              </a>{" "}
              que está ayudando a la gente promedio de América Latina, Asia y
              América del Norte a construir fortunas de la noche a la mañana. Es
              posible que lo vean con escepticismo porque suena demasiado bueno
              para ser verdad".
            </p>
            <p>{CHARACTER} prosigue:</p>
            <p className="paragraph-italic">
              "Yo lo entiendo porque me pasó exactamente lo mismo cuando me lo
              contó un amigo en el que confío mucho. Sin embargo, después de ver
              con mis propios ojos cuánto dinero estaba haciendo, tenía que
              probarlo yo mismo.
            </p>
            <p className="paragraph-italic">
              Me alegra haberlo intentado, porque gracias a eso he hecho la
              mayor cantidad de dinero en mi vida, y de la forma más sencilla.
              Les hablo de decenas de miles de{" "}
              <strong>USD al día, en automático.</strong> Es literalmente la
              manera más rápida de hacer que te llueva dinero ahora mismo. Y no
              va a durar mucho después de que las muchas personas lo descubran.
              O de que los bancos lo destruyan para siempre".
            </p>
          </div>
          <CharacterImage src={Image3}txt={""}/>
          <div className="content-text">
            <h3 className="title-2">
              ¿QUÉ ES EXACTAMENTE Bitcoin Code Y CÓMO <br /> FUNCIONA?
            </h3>
            <p>
              <strong>
                La idea detrás de{" "}
                <a href={LINK} target="_blank">
                  Bitcoin Code
                </a>{" "}
                es bastante sencilla:
              </strong>{" "}
              Permitirles a las personas promedio unirse al boom de las
              criptomonedas, que sigue siendo la inversión más rentable del
              siglo XXI, a pesar de lo que piensa la mayoría de la gente.
            </p>
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
              la gente común y corriente de América Latina
            </p>
            <p>
              <a href={LINK} target="_blank">
                Bitcoin Code
              </a>{" "}
              te permite sacar provecho de todas estas criptomonedas, incluso en
              un mercado bajista. Utiliza inteligencia artificial (AI) para
              gestionar ventas, y ventas cortas por ti, y que puedas hacer
              dinero a toda hora, incluso mientras duermes.
            </p>
            <p>
              <a href={LINK} target="_blank">
                Bitcoin Code
              </a>{" "}
              está respaldado por algunas de las mentes más brillantes de la
              historia en el área de la tecnología. Entre ellas tenemos a
              <strong> Richard Branson, Elon Musk y Bill Gates.</strong>
            </p>
          </div>
          <CharacterImage src={"https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img5.jpg"}
            txt={
              "Bill Gates y Richard Branson conversaron sobre Bitcoin Code en CES 2021."
            }
          />
          <div className="content-text">
            <p>
              Estos genios de la tecnología han construido empresas
              multimillonarias para resolver problemas complejos en áreas tales
              como pagos en línea, computación y transporte. Ahora luchan contra
              la desigualdad económica que representa un problema global, al
              permitir que cualquier persona, sin importar que tan pobre o rica
              sea,{" "}
              <strong>
                haga suficiente dinero para disfrutar de una vida feliz y
                satisfactoria.
              </strong>
            </p>
          </div>
          <ReadMore onClick={setReadmore} />
          {readMore ? (
            <>
              <div className="content-text">
                <h2 className="title-2">
                  EL LUCRATIVO SECRETO PARA GENERAR DINERO QUE LOS GRANDES
                  BANCOS NO QUIEREN QUE SEPAS
                </h2>
                <p>{CHARACTER} continúa,</p>
                <p>
                  "Nuestra economía está pasando por momentos difíciles y esta
                  es la solución que la gente ha estado esperando. Nunca en la
                  historia habíamos tenido una oportunidad tan magnífica que la
                  gente corriente pueda aprovechar para{" "}
                  <strong>
                    generar fortunas tremendas en tan poco tiempo.
                  </strong>
                </p>
                <p>
                  Algunas personas tienen dudas sobre si probarlo o no porque es
                  algo muy diferente.{" "}
                  <strong>
                    ¡Y por eso es que los grandes bancos están tratando de
                    ocultarlo!
                  </strong>{" "}
                  Los grandes bancos están todo el tiempo generando propaganda y
                  diciendo que las criptomonedas y las plataformas como{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  son un fraude. ¿Por qué? Temen que sus beneficios corporativos
                  disminuyan una vez que sus clientes aprendan a generar
                  riquezas masivas por su cuenta.
                </p>

                <p>
                  La verdad es que las criptomonedas son la revolución de
                  nuestra era y cualquier persona que no se una a esta
                  oportunidad se pierde de mucho.{" "}
                  <strong>
                    Ya he recibido llamadas agresivas y amenazantes por parte de
                    grandes corporaciones financieras
                  </strong>{" "}
                  porque estoy poniendo esta tecnología a la vista de todos.
                  Pero a mí eso no me importa. La gente en América Latina ya
                  está empezando a conocer la verdad y solo es cuestión de
                  tiempo para que cada vez más personas sepan sobre esto.
                </p>
                <p>
                  Lo comparto porque ya he recibido cientos de correos de
                  personas que me agradecen por compartir este secreto.{" "}
                  <strong>
                    Mi favorito es el de un joven que gracias al dinero que hizo
                    con{" "}
                    <a href={LINK} target="_blank">
                      Bitcoin Code
                    </a>
                  </strong>{" "}
                  le regaló a su hermano menor el auto de sus sueños: un Ferrari
                  488 Pista. Esta plataforma de verdad está haciendo que la vida
                  de todas las personas del mundo sea un poco mejor".
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img6.jpg"
                }
                txt={
                  "Desde que mi hermano menor era un niño, quiso un Ferrari 488 Pista por su clásico y hermoso color rojo y su poderoso motor. Bien, últimamente he estado haciendo enormes cantidades de dinero gracias a una nueva plataforma para hacer transacciones con criptomonedas (escríbanme si quieren más detalles), ¡Y lo sorprendí con el AUTO DE SUS SUEÑOS! ¡Su raección NO TIENE PRECIO! ¡Te amo, hermanito!"
                }
              />
              <div className="content-text">
                <h2 className="title-2">
                  ¿BITCOIN CODE DE VERDAD FUNCIONA? LO PROBAMOS NOSOTROS MISMOS
                </h2>
                <p>
                  Nuestros editores en jefe no nos dejaron publicar la
                  entrevista con {CHARACTER} hasta verificar que{" "}
                  <a src={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  es un método legítimo para hacer dinero desde casa. La
                  gerencia no quería que publicáramos ningún tipo de información
                  que pudiera causar que los ciudadanos de América Latina
                  perdieran el dinero que ganan con su esfuerzo.
                </p>
                <p>
                  Así que nuestro equipo editorial probó{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  para asegurarse que en verdad funciona como dice Martin
                  Vizcarra. Uno de nuestros editores en línea, Juan Gómez, se
                  ofreció como voluntario y arriesgó su propio dinero para
                  probar{" "}
                  <a src={LINK} target="_blank">
                    Bitcoin Code
                  </a>
                  .
                </p>
                <p>
                  Juan es un hombre de 37 años, padre de dos hijos. Su esposa se
                  enfermó el año pasado y por eso perdió su trabajo. Juan
                  admitió que tenía problemas financieros y que esta oportunidad
                  de inversión podría ser la solución.
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img7.jpg"
                }
                txt={
                  "Su familia estaba luchando para que el dinero les alcanzara y tenían sus esperanzas puestas en que Bitcoin Code les ayudaría a aliviar la presión, así que Juan decidió probar el sistema y hablar sobre los resultados que obtuvo."
                }
              />
              <div className="content-text">
                <h3 className="title-3">Juan informa que:</h3>
                <p>
                  "Al principio, cuando escuché la entrevista de Martin
                  Vizcarra, pensé que era un chiste. Hacer dinero desde casa no
                  es más que un sueño. Decidí que igual lo iba a probar, dadas
                  mis circunstancias económicas. Además, todo sea por el
                  periodismo de calidad.
                </p>
                <p>
                  Vi un video introductorio acerca de la plataforma y después me
                  registré. Me pareció que el video era demasiado prometedor,
                  pero decidí dejar de lado mi escepticismo. Un par de horas
                  después recibí la llamada del que sería mi inversionista
                  personal. Respondió todas mis preguntas y dudas, y me aseguró
                  que haría dinero. Punto.
                </p>
                <p>
                  Mi inversionista personal incluso{" "}
                  <strong>me prometió que, si perdía un solo centavo,</strong>{" "}
                  me reembolsaría mis S/1200 de inmediato. Así de seguro estaba
                  él de que esto me iba a cambiar la vida. Les digo, eso sí es
                  un servicio al cliente, es mucho mejor que cualquier otro que
                  haya visto en mi vida y no me sorprende que los bancos estén
                  tan preocupados.
                </p>
                <p>
                  Una vez que recibí acceso a la plataforma, deposité mi
                  inversión inicial de S/1200. La plataforma hace transacciones
                  en euros (€) y dólares ($) pero puedes retirar los fondos en
                  la moneda que prefieras.
                </p>
                <p>
                  El sistema de{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  es una plataforma que hace transacciones automáticas con
                  criptomonedas. El software utiliza algoritmos avanzados de
                  inteligencia artificial y aprendizaje automático para predecir
                  <strong> exactamente</strong> cuándo las criptomonedas subirán
                  o bajarán. Luego compra y vende por ti, de forma automática y
                  a toda hora. La tecnología ha mejorado nuestras vidas de todas
                  las formas imaginables, ¿por qué no usarla también para hacer
                  más dinero?"
                </p>
                <h2 className="title-2">
                  LOS RESULTADOS REALES DE JUAN CON EL SISTEMA
                </h2>
                <p>
                  "Después de una hora de haber depositado los S/1200, el
                  software empezó a hacer transacciones por mí. Para ser
                  honesto, me ponía nervioso perder todo mi dinero. Y
                  efectivamente, ¡la primera transacción resultó en una pérdida
                  de S/89!
                </p>
                <p>
                  Sentí un nudo en la garganta. Pensé que me habían estafado. Ya
                  me estaba preparando para llamar a mi inversionista personal y
                  pedirle que me regresara mi dinero, pero luego recordé algo
                  que me había dicho antes:{" "}
                  <strong>
                    El algoritmo hace predicciones correctas el 80-89% del
                    tiempo.
                  </strong>{" "}
                  No vas a ganar TODAS las transacciones, pero vas a ganar
                  suficiente y al final te generará ganancias
                </p>
                <p>
                  Así que dejé que el software siguiera haciendo transacciones
                  por mí mientras lo observaba sin perderme un segundo.{" "}
                  <strong>¡La siguiente transacción fue positiva!</strong> Solo
                  me dejó <strong>S/68</strong>, pero algo es algo. Luego de eso
                  hice <strong>S/182.</strong> Después de eso{" "}
                  <strong>S/78</strong>, lo que para ese momento era una
                  ganancia total de <strong>S/240</strong>. ¡Y todo pasó en
                  menos de 5 minutos!
                </p>
                <p>
                  Luego de eso empecé a acumular dinero como si nada, no podía
                  creer lo que veían mis ojos.
                </p>
                <p>
                  <strong>
                    Cada vez que refrescaba la pantalla, mis ganancias crecían y
                    crecían. Me sentía como si estuviera alucinando con drogas,
                    todo era demasiado emocionante
                  </strong>
                </p>
                <p>
                  Ahora sé por qué {CHARACTER} está siempre de buen humor. Y por
                  qué los grandes bancos no quieren que la gente sepa nada sobre
                  esta laguna. Al final del día había hecho{" "}
                  <strong>más de S/2.700 en ganancias,</strong> ¡nada mal para
                  haber empezado con S/1200! Estaba tan emocionado que apenas
                  pude dormir.
                </p>
                <p>
                  El día siguiente era martes y tenía que ir a trabajar otra
                  vez. Si les soy sincero (y no le digan esto a mi jefe), fue
                  difícil concentrarme en el trabajo mientras pensaba que el
                  software de{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  me estaba generando dinero.
                </p>
                <p>
                  Me escapé al baño varias veces para revisar cómo iban mis
                  ganancias, que seguían creciendo (con pérdidas pequeñas aquí y
                  allá). En la noche, después de que mis hijos se quedaron
                  dormidos, <strong>mi cuenta tenía S/4,834.</strong>¡Más de lo
                  que gano en una SEMANA de trabajo!
                </p>
                <p>
                  Cuando se terminó la semana ya había hecho S/19,168. Retiré
                  exactamente <strong>S/15.000</strong> y reinvertí el resto. En
                  dos días recibí mi cheque en el correo por S/15.000 exactos.
                  ¡No podía creer que estaba despierto!"
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img8.jpg"
                }
                txt={
                  "Juan recibió un cheque por S/15.000 por sus primeras dos semanas en la plataforma Bitcoin Code."
                }
              />
              <div className="content-text">
                <h3 className="title-3">Juan dice,</h3>
                <p>
                  “Ahora hago regularmente unos <strong>S/2,500 – 5.000</strong>{" "}
                  al día gracias a{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>
                  . El dinero se deposita en mi cuenta del banco cada par de
                  días. Con solo unos cuantos clics recibo mi dinero en las
                  siguientes 24 a 48 horas. Cada vez que veo la transferencia en
                  mi cuenta, tengo que pellizcarme para asegurarme de que no
                  estoy soñando.
                </p>
                <p>
                  Por suerte, me ENCANTA mi trabajo porque aquí puedo contar
                  historias importantes (como esta) a las personas. De lo
                  contrario, ya habría renunciado. Sin embargo, ya planeé unas
                  vacaciones con mi familia a Bali, Indonesia, para celebrar que
                  pagamos todas las deudas y que al fin nuestras finanzas están
                  en orden.
                </p>
                <p>
                  Nada de esto sería posible sin la generosidad del Sr. Martin
                  Vizcarra, quien compartió este secreto en la TV en vivo. Y me
                  alegra haberme atrevido a probar{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  yo mismo. Mi esposa está más feliz que nunca y la despensa de
                  juguetes de mis hijos está hasta el tope
                </p>
                <p>
                  Mis compañeros de trabajo se lamentan porque no empezaron hace
                  dos semanas como yo, pero en poco tiempo la oficina entera
                  (incluido mi jefe) ya se había registrado. Ahora dicen que soy
                  un 'héroe' por haberlo intentado".
                </p>
                <h2 className="title-2" onClick={handleRoute}>
                  CÓMO EMPEZAR EN BITCOIN CODE (ESPACIOS LIMITADOS DISPONIBLES)
                </h2>
                <p>
                  Para empezar, solo necesitas tu computadora, un teléfono
                  inteligente o Tablet con acceso a Internet. No necesitas
                  habilidades específicas, solo debes saber cómo usar una
                  computadora y navegar por Internet. No necesitas experiencia
                  en tecnología o criptomonedas porque tanto el software como tu
                  inversionista personal te garantizan que generarás ganancias.
                  Otra de las ventajas de este programa es que puedes empezar
                  cuando quieras. Puedes diseñar tu propio horario, bien sean 5
                  horas a la semana o 50 horas a la semana. Solo debes iniciar
                  el software de transacciones automáticas y pausarlo cuando
                  desees (aunque no sé por qué alguien querría pausarlo).
                </p>
                <p>
                  Para ahorrarles tiempo a nuestros lectores y hacer un chequeo
                  doble de la funcionalidad, Juan creó amablemente una guía para
                  iniciarse en el sistema.
                </p>
                <h2 className="title-2">ESTA ES LA GUÍA PASO A PASO:</h2>
                <p>
                  Lo primero que ves es un video que presume del poder de{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>
                  . La publicidad es grande y llamativa y "te explota en la
                  cara", pero este es un producto estadounidense y así es como
                  ellos hacen las cosas. Bien, simplemente debes escribir tu
                  <strong> nombre y dirección de correo</strong> junto al video
                  para empezar de inmediato.
                </p>
                <p>
                  (<strong>Consejo:</strong> Incluso si decides no invertir
                  nada, te recomiendo que te registres ya porque es gratis, y
                  los espacios para los residentes de Perú podrían terminarse en
                  cualquier momento).
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img9.jpg"
                }
                txt={
                  "Juan recibió un cheque por S/15.000 por sus primeras dos semanas en la plataforma Bitcoin Code."
                }
              />
              <div className="content-text">
                <p>
                  Luego de esto te piden que ingreses fondos a tu cuenta.
                  Mientras veía la página de depósitos, mi teléfono sonó. Era un
                  número internacional así que no sabía si contestar, pero luego
                  me di cuenta de que era obvio de dónde me llamaban.
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img10.jpg"
                }
                txt={
                  "Juan recibió un cheque por S/15.000 por sus primeras dos semanas en la plataforma Bitcoin Code."
                }
              />
              <div className="content-text">
                <p>
                  Tal y como me esperaba, era mi propio administrador de cuenta
                  al teléfono. El servicio que ofrecen es excelente. Me guió en
                  todo el proceso de acreditación. Aceptan todas las tarjetas de
                  crédito reconocidas como Visa, MasterCard y American Express.
                  Proseguí y deposité la cantidad mínima: $/300 o S/1200.
                </p>
              </div>
              <CharacterImage
                src={
                  "https://pgenpro-test.s3.amazonaws.com/characters/martinvizcarra-img11.jpg"
                }
                txt={""}
              />
              <div className="content-text">
                <p>
                  Una vez ingresados los fondos, fui a la sección "Operador
                  Automático" del software, establecí el monto de operaciones
                  recomendado (S/180) y lo habilité. El software empezó a hacer
                  operaciones a altas velocidades y al principio me preocupé,
                  pero dejé que hiciera lo suyo.
                </p>
                <p>
                  "Todo el mundo quiere ser rico, pero nadie sabe cómo lograrlo.
                  Bien, esta es una oportunidad única en la vida para construir
                  una fortuna que te permita vivir la vida que de verdad deseas.
                  NO va a estar disponible para siempre, así que no te lo
                  pierdas." – <strong>{CHARACTER}</strong>
                </p>
                <h2 className="title-2">ACTUALIZACIÓN</h2>
                <p>
                  Acabamos de recibir la noticia de que ya casi todos los
                  lugares para los residentes de América Latina están ocupados.{" "}
                  <a href={LINK} target="_blank">
                    Bitcoin Code
                  </a>{" "}
                  puede aceptar solo una cantidad limitada de usuarios para así
                  mantener los altos niveles de ganancias por usuario. En este
                  momento aún quedan 37 espacios disponibles, así que date prisa
                  y regístrate para que asegures tu lugar.
                </p>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="cooment-section">
            <p># comentarios recientes</p>
            <p>Añadir un comentario</p>
          </div>
          {comments.map((item, index) => (
            <Comment
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              number={item.number}
              time={item.time}
            />
          ))}
        </div>
        <div className="sidebar">
          <SideBar />
        </div>
      </body>
      <MainFooter />
      <Popup />
      <StickyFooter />
      <MiniModal />
    </div>
  );
}

export default App;
