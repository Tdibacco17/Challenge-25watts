import style from "./navbar.module.css";
import logo25Watts from "./imagenes/logo_25w.png";
import { useState } from "react";

export default function Navbar() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 100) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={visible === true ? style.containerNavbarTrue : style.containerNavbar}>
            <img src={logo25Watts} alt="Img" className={style.logo25Watts} />

            <div className={style.navbarText}>
                <a href="#Home"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>Home</h3></div></a>
                <a href="#AboutUs"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>About us</h3></div></a>
                <a href="#Services"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>Services</h3></div></a>
                <a href="#Products"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>Products</h3></div></a>
                <a href="#MoreDetails"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>Details</h3></div></a>
                <a href="#Contact"><div className={visible === true ? style.navbarHomeTrue : style.navbarHome}><h3>Contact</h3></div></a>
            </div>
        </div>
    )
}