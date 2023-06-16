import "./headerTopComercio.css"
import "./headerTopComercio.responsive.css"

import { navbarData } from "../../assets/utils/utils.navbarelcomercio.js"
import iconBurger from "../../assets/images/icons/icon-burger-elcomerio.svg"
import iconLoupe from "../../assets/images/icons/icon-loupe-elcomercio.svg"
import { useRef, useState } from 'react';
import logo from "../../assets/images/logoElComercio.png"

export function HeaderTopComercio () {
    const [scrollProgress, setscrollProgress] = useState(0);
    const [isScroll, setIsScroll] = useState(false);
    const [classContainer, setClassContainer] = useState("nav-container");

    const listRef = useRef(null)

    const handleClick = (direction) => {
        (direction > 0) ? listRef.current.scrollLeft += 100 : listRef.current.scrollLeft -= 100;
    };

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        setscrollProgress(scrollProgress);
        setIsScroll(false)
        setClassContainer("nav-container")
        if(scrollProgress>0.9){
            setIsScroll(true)
            setClassContainer("nav-container sticky")
        }
    
      });

     

    return(
        <nav className={classContainer} >
            <div className="nav-wrap">
                <div className="nav-left">
                    <img className="burger-icon" src={iconBurger} alt="menu icon" />
                    <div className="search-icon">
                        <img src={iconLoupe} alt="search icon" />
                    </div>
                </div>

                {isScroll ?
                    <>
                        <div className="logo-content">
                            <a className="a-logo" href="/">
                                <img src={logo} alt="img logo el comercio" />
                            </a>
                        </div>
                        <a className="btn-suscribe" href="/">Suscríbete</a>
                    </> 
                 : <>
                    <button onClick={() => handleClick(-1)} class="btn-left" >
                        <svg width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path class="nav-d__icon-back" d="M198.6 246.1L382.7 62c5.1-5.1 7.9-11.8 7.9-19 0-7.2-2.8-14-7.9-19l-16.1-16.1C361.5 2.8 354.7 0 347.5 0s-14 2.8-19 7.9L109.3 227c-5.1 5.1-7.9 11.9-7.8 19.1 0 7.2 2.8 14 7.8 19.1l218.9 218.9c5.1 5.1 11.8 7.9 19 7.9 7.2 0 14-2.8 19-7.9l16.1-16.1c10.5-10.5 10.5-27.6 0-38.1L198.6 246.1z"></path></svg>
                    </button>
                    <ul className="nav-list" ref={listRef}>
                        {navbarData.map((item,index) => {
                            return <li key={index}><a href="/">{item}</a></li>
                        })}
                    </ul>
                    <button className="btn-right" onClick={() => handleClick(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 451.8 451.8"><path class="nav-d__icon-back" d="M345.4 248.3L151.2 442.6c-12.4 12.4-32.4 12.4-44.7 0 -12.4-12.4-12.4-32.4 0-44.7L278.3 225.9 106.4 54c-12.4-12.4-12.4-32.4 0-44.7 12.4-12.4 32.4-12.4 44.8 0l194.3 194.3c6.2 6.2 9.3 14.3 9.3 22.4C354.7 234 351.6 242.1 345.4 248.3z"></path></svg>
                    </button>
                    
                </>
                
                }

                <button className="btn-sign-in">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="nav-d__sign-p1" d="M11.1783 20.2C13.5708 20.2 15.8653 19.2496 17.5571 17.5578C19.2488 15.8661 20.1992 13.5715 20.1992 11.179C20.1996 9.99412 19.9666 8.82074 19.5134 7.72592C19.0603 6.6311 18.3958 5.63627 17.5581 4.79828C16.7204 3.96028 15.7258 3.29553 14.6311 2.842C13.5365 2.38846 12.3632 2.15503 11.1783 2.15503C9.99334 2.1549 8.82002 2.3882 7.72529 2.84161C6.63057 3.29503 5.63589 3.95967 4.79809 4.79757C3.96028 5.63547 3.29575 6.63022 2.84245 7.725C2.38916 8.81977 2.15599 9.99312 2.15625 11.178C2.15612 12.3629 2.38939 13.5361 2.84274 14.6308C3.29609 15.7254 3.96064 16.72 4.79844 17.5578C5.63624 18.3956 6.63087 19.0602 7.72552 19.5135C8.82018 19.9669 9.99343 20.2002 11.1783 20.2V20.2Z" stroke="#4D4D4D" stroke-width="1.6"></path><path class="nav-d__sign-p2" d="M13.2956 13.051C13.8472 12.6978 14.3011 12.2115 14.6156 11.637C14.9302 11.0624 15.0952 10.418 15.0956 9.76302C15.096 9.24846 14.995 8.73887 14.7984 8.26336C14.6018 7.78784 14.3134 7.35573 13.9497 6.99169C13.5861 6.62766 13.1542 6.33885 12.6789 6.14176C12.2036 5.94466 11.6941 5.84315 11.1796 5.84302C10.665 5.84302 10.1554 5.94444 9.68005 6.14149C9.20468 6.33854 8.77281 6.62734 8.40912 6.9914C8.04544 7.35546 7.75707 7.78763 7.56051 8.2632C7.36394 8.73877 7.26304 9.24842 7.26357 9.76302C7.26365 10.4153 7.42704 11.0572 7.73883 11.6301C8.05062 12.203 8.50089 12.6888 9.04857 13.043C5.98657 14.136 3.91357 16.729 4.63357 17.256C5.47972 18.178 6.50982 18.9124 7.65735 19.4116C8.80489 19.9109 10.0444 20.164 11.2958 20.1546C12.5472 20.1452 13.7827 19.8734 14.9226 19.3569C16.0625 18.8404 17.0814 18.0907 17.9136 17.156C18.3866 16.736 16.2896 14.133 13.2956 13.051Z" stroke="#4D4D4D" stroke-width="1.6"></path></svg>
                    <span>INICIA SESIÓN</span>
                </button>

               
            </div>
        </nav>
    )
}