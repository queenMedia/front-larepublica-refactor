import "./App.css";
import { Title } from "./components/title/title";
import { SubTitle } from "./components/subTitle/subTitle";
import { CharacterImage } from "./components/characterImage/characterImage";
import { SideTitle } from "./components/sideTitle/sideTitle";

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
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
        </div>
        <div className="sidebar">
          <SideTitle txt={"RESULTADOS DE NUESTROS LECTORES"} />
          <SideTitle txt={"GANANCIAS: S/26,952"} />
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
          <div>image</div>
        </div>
      </body>
      <footer className="footer">
        <div>footer</div>
      </footer>
    </div>
  );
}

export default App;
