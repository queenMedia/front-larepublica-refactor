
import "./comercioFooter.css"
import "./comercioFooter.responsive.css"
import { directorsData, linksData, gecListData } from "../../assets/utils/utils.footerelcomercio"
import logo from "../../assets/images/logoElComercio.png"
import gdaPhoto from "../../assets/images/gda-photo.png"
import bookPhoto from "../../assets/images/libro-reclamacion.jpg"

export function ComercioFooter () {

    return(
        <section className="footer-section">
            <div className="f-content">
                <div className="wraper">
                    <a className="logo" href="/"><img src={logo} alt="logo"/></a>
                    <address><p>Empresa Editora El Comercio. Jorge Salazar Araoz # 171 Santa Catalina La Victoria. Copyright © Elcomercio.pe. Grupo El Comercio - Todos los derechos reservados</p></address>
                    <div className="directors">
                        <ul>
                            {directorsData.map((item, index) => {
                                return <li key={index}><p><span>{item.title} </span>{item.data}</p></li>
                            })}
                        </ul>
                    </div>
                    <div className="contact">
                        <strong>Suscripciones:</strong> Central telefónica 311-5100. Horario de atención: Lunes a viernes 7am – 7pm | Sábados,
                         domingos y feriados 7am – 1pm <strong>Publicidad:</strong> fonoavisos@comercio.com.pe <strong>Club El Comercio: </strong> 
                         Central telefónica 311-5100. Horario de atención: Lunes a viernes 7am – 7pm | Sábados, domingos y feriados 7am – 1pm
                    </div>
                    <div className="gda">
                        <a href="/"><img className="book-img" src={bookPhoto} alt="" /></a>
                        <img className="gda-img" src={gdaPhoto} alt="" />
                        <p>Miembro del Grupo de Diarios de América</p>
                    </div>
                </div>
                <ul className="links">
                    {linksData.map((item, index) =>{
                        return <li key={index}><a href="/">{item}</a></li>
                    })}
                </ul>
                <div className="gec">
                    <div className="title">Visite también</div>
                    <ul>
                        {gecListData.map((item, index) =>{
                            return <li key={index}><a href="/">{item}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}