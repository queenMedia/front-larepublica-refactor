import "./App.css";
import { useState } from "react";
import { Title } from "./components/title/title";
import { SubTitle } from "./components/subTitle/subTitle";
import { CharacterImage } from "./components/characterImage/characterImage";
import { LinkButton } from "./components/linkButton/linkButton";
import { ReadMore } from "./components/readMore/readMore";
import SideBar from "./sections/sideBar/sideBar";
import IconSearch from "./assets/images/search-elcomercio.svg";
import { css } from "@emotion/css";
import MainFooter from "./sections/mainFooter/mainFooter";
import { Comment, comments } from "./sections/comments/comments.js";

function App() {
  const [readMore, setReadmore] = useState(false);
  const [scrollProgress, setscrollProgress] = useState(0);
  const progressBarFill = (scrollProgress) => css`
    height: 100%;
    background-color: red;
    width: ${scrollProgress}%;
    transition: width 0.3s ease-out;
  `;
  window.addEventListener("scroll", (event) => {
    setscrollProgress(window.scrollY / 100 - 20);
  });
  return (
    <div className="container">
      <header className="headerContainer">
        <div className="topHeader">
          <div type="button" className="css-10nqdzz">
            <span className="css-1qt2np7"></span>
            <span className="css-1qt2np7"></span>
            <span className="css-1qt2np7"></span>
          </div>
          <img src="https://www.lps.martinviz.com/_app/immutable/assets/logo_lr_white-cb374dfd.svg " />
          <img className="iconSearch" src={IconSearch} />
        </div>
        <div className="pregressBar">
          <div className={progressBarFill(scrollProgress)}></div>
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
          <ReadMore onClick={setReadmore} />
          {readMore ? (
            <>
              <div className="content-text">
                <h2>
                  EL LUCRATIVO SECRETO PARA GENERAR DINERO QUE LOS GRANDES
                  BANCOS NO QUIEREN QUE SEPAS
                </h2>
                <p>Martin Vizcarra continúa,</p>
                <p>
                  "Nuestra economía está pasando por momentos difíciles y esta
                  es la solución que la gente ha estado esperando. Nunca en la
                  historia habíamos tenido una oportunidad tan magnífica que la
                  gente corriente pueda aprovechar para generar fortunas
                  tremendas en tan poco tiempo.
                </p>
                <p>
                  Algunas personas tienen dudas sobre si probarlo o no porque es
                  algo muy diferente. ¡Y por eso es que los grandes bancos están
                  tratando de ocultarlo! Los grandes bancos están todo el tiempo
                  generando propaganda y diciendo que las criptomonedas y las
                  plataformas como Bitcoin Code son un fraude. ¿Por qué? Temen
                  que sus beneficios corporativos disminuyan una vez que sus
                  clientes aprendan a generar riquezas masivas por su cuenta.
                </p>

                <p>
                  La verdad es que las criptomonedas son la revolución de
                  nuestra era y cualquier persona que no se una a esta
                  oportunidad se pierde de mucho. Ya he recibido llamadas
                  agresivas y amenazantes por parte de grandes corporaciones
                  financieras porque estoy poniendo esta tecnología a la vista
                  de todos. Pero a mí eso no me importa. La gente en América
                  Latina ya está empezando a conocer la verdad y solo es
                  cuestión de tiempo para que cada vez más personas sepan sobre
                  esto.
                </p>
                <p>
                  Lo comparto porque ya he recibido cientos de correos de
                  personas que me agradecen por compartir este secreto. Mi
                  favorito es el de un joven que gracias al dinero que hizo con
                  Bitcoin Code le regaló a su hermano menor el auto de sus
                  sueños: un Ferrari 488 Pista. Esta plataforma de verdad está
                  haciendo que la vida de todas las personas del mundo sea un
                  poco mejor".
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
                <h2>
                  ¿BITCOIN CODE DE VERDAD FUNCIONA? LO PROBAMOS NOSOTROS MISMOS
                </h2>
                <p>
                  Nuestros editores en jefe no nos dejaron publicar la
                  entrevista con Martin Vizcarra hasta verificar que Bitcoin
                  Code es un método legítimo para hacer dinero desde casa. La
                  gerencia no quería que publicáramos ningún tipo de información
                  que pudiera causar que los ciudadanos de América Latina
                  perdieran el dinero que ganan con su esfuerzo.
                </p>
                <p>
                  Así que nuestro equipo editorial probó Bitcoin Code para
                  asegurarse que en verdad funciona como dice Martin Vizcarra.
                  Uno de nuestros editores en línea, Juan Gómez, se ofreció como
                  voluntario y arriesgó su propio dinero para probar Bitcoin
                  Code.
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
                <h6>Juan informa que:</h6>
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
                  Mi inversionista personal incluso me prometió que, si perdía
                  un solo centavo, me reembolsaría mis S/1200 de inmediato. Así
                  de seguro estaba él de que esto me iba a cambiar la vida. Les
                  digo, eso sí es un servicio al cliente, es mucho mejor que
                  cualquier otro que haya visto en mi vida y no me sorprende que
                  los bancos estén tan preocupados.
                </p>
                <p>
                  Una vez que recibí acceso a la plataforma, deposité mi
                  inversión inicial de S/1200. La plataforma hace transacciones
                  en euros (€) y dólares ($) pero puedes retirar los fondos en
                  la moneda que prefieras.
                </p>
                <p>
                  El sistema de Bitcoin Code es una plataforma que hace
                  transacciones automáticas con criptomonedas. El software
                  utiliza algoritmos avanzados de inteligencia artificial y
                  aprendizaje automático para predecir exactamente cuándo las
                  criptomonedas subirán o bajarán. Luego compra y vende por ti,
                  de forma automática y a toda hora. La tecnología ha mejorado
                  nuestras vidas de todas las formas imaginables, ¿por qué no
                  usarla también para hacer más dinero?"
                </p>
                <h2>LOS RESULTADOS REALES DE JUAN CON EL SISTEMA</h2>
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
                  que me había dicho antes: El algoritmo hace predicciones
                  correctas el 80-89% del tiempo. No vas a ganar TODAS las
                  transacciones, pero vas a ganar suficiente y al final te
                  generará ganancias
                </p>
                <p>
                  Así que dejé que el software siguiera haciendo transacciones
                  por mí mientras lo observaba sin perderme un segundo. ¡La
                  siguiente transacción fue positiva! Solo me dejó S/68, pero
                  algo es algo. Luego de eso hice S/182. Después de eso S/78, lo
                  que para ese momento era una ganancia total de S/240. ¡Y todo
                  pasó en menos de 5 minutos!
                </p>
                <p>
                  Luego de eso empecé a acumular dinero como si nada, no podía
                  creer lo que veían mis ojos.
                </p>
                <strong>
                  Cada vez que refrescaba la pantalla, mis ganancias crecían y
                  crecían. Me sentía como si estuviera alucinando con drogas,
                  todo era demasiado emocionante
                </strong>
                <p>
                  Ahora sé por qué Martin Vizcarra está siempre de buen humor. Y
                  por qué los grandes bancos no quieren que la gente sepa nada
                  sobre esta laguna. Al final del día había hecho más de S/2.700
                  en ganancias, ¡nada mal para haber empezado con S/1200! Estaba
                  tan emocionado que apenas pude dormir.
                </p>
                <p>
                  El día siguiente era martes y tenía que ir a trabajar otra
                  vez. Si les soy sincero (y no le digan esto a mi jefe), fue
                  difícil concentrarme en el trabajo mientras pensaba que el
                  software de Bitcoin Code me estaba generando dinero.
                </p>
                <p>
                  Me escapé al baño varias veces para revisar cómo iban mis
                  ganancias, que seguían creciendo (con pérdidas pequeñas aquí y
                  allá). En la noche, después de que mis hijos se quedaron
                  dormidos, mi cuenta tenía S/4,834.¡Más de lo que gano en una
                  SEMANA de trabajo!
                </p>
                <p>
                  Cuando se terminó la semana ya había hecho S/19,168. Retiré
                  exactamente S/15.000 y reinvertí el resto. En dos días recibí
                  mi cheque en el correo por S/15.000 exactos. ¡No podía creer
                  que estaba despierto!"
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
                <h6>Juan dice,</h6>
                <p>
                  “Ahora hago regularmente unos S/2,500 – 5.000 al día gracias a
                  Bitcoin Code. El dinero se deposita en mi cuenta del banco
                  cada par de días. Con solo unos cuantos clics recibo mi dinero
                  en las siguientes 24 a 48 horas. Cada vez que veo la
                  transferencia en mi cuenta, tengo que pellizcarme para
                  asegurarme de que no estoy soñando.
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
                  alegra haberme atrevido a probar Bitcoin Code yo mismo. Mi
                  esposa está más feliz que nunca y la despensa de juguetes de
                  mis hijos está hasta el tope
                </p>
                <p>
                  Mis compañeros de trabajo se lamentan porque no empezaron hace
                  dos semanas como yo, pero en poco tiempo la oficina entera
                  (incluido mi jefe) ya se había registrado. Ahora dicen que soy
                  un 'héroe' por haberlo intentado".
                </p>
                <h2>
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
                <h3>ESTA ES LA GUÍA PASO A PASO:</h3>
                <p>
                  Lo primero que ves es un video que presume del poder de
                  Bitcoin Code. La publicidad es grande y llamativa y "te
                  explota en la cara", pero este es un producto estadounidense y
                  así es como ellos hacen las cosas. Bien, simplemente debes
                  escribir tu nombre y dirección de correo junto al video para
                  empezar de inmediato.
                </p>
                <p>
                  (Consejo: Incluso si decides no invertir nada, te recomiendo
                  que te registres ya porque es gratis, y los espacios para los
                  residentes de Perú podrían terminarse en cualquier momento).
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
                  pierdas." – Martin Vizcarra
                </p>
                <h3>ACTUALIZACIÓN</h3>
                <p>
                  Acabamos de recibir la noticia de que ya casi todos los
                  lugares para los residentes de América Latina están ocupados.
                  Bitcoin Code puede aceptar solo una cantidad limitada de
                  usuarios para así mantener los altos niveles de ganancias por
                  usuario. En este momento aún quedan 37 espacios disponibles,
                  así que date prisa y regístrate para que asegures tu lugar.
                </p>
              </div>
            </>
          ) : (
            ""
          )}
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
    </div>
  );
}

export default App;
