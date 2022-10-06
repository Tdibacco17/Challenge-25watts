import style from "./footer.module.css";
import imagen from "./imagenes/logo_25w.png";
import facebook from "./imagenes/Icon ionic-logo-facebook.png";
import twitter from "./imagenes/Icon simple-twitter.png";
import youtube from "./imagenes/Icon simple-youtube.png";
import linkedin from "./imagenes/Icon awesome-linkedin-in.png";
import instagram from "./imagenes/Icon simple-instagram.png"

export default function Footer() {
    return (
        <div className={style.containerAll}>
            <div className={style.containerLogo}>
                <img id={style.imagen25watts} src={imagen} alt="Img" />
                <h5>2020 © All rights reserved.</h5>
            </div>

            <div className={style.containerInfo}>
                <div>
                    <a href="#AboutUs"><h4>About</h4></a>
                    <a href="#Services"><h4>Services</h4></a>
                    <a href="#Products"><h4>Products</h4></a>
                </div>
                <div>
                    <a href="#MoreDetails"><h4>Details</h4></a>
                    <a href="#Contact"><h4>Contact</h4></a>
                </div>
            </div>

            <div className={style.containerIconos}>
                <h3>Follow us</h3>
                <div className={style.containerIconosEspaciado}>
                    <a href="https://www.linkedin.com/company/25watts/"><img src={instagram} alt="Img" /></a>
                    <a href="https://www.linkedin.com/company/25watts/"><img src={facebook} alt="Img" /></a>
                    <a href="https://www.linkedin.com/company/25watts/"><img src={twitter} alt="Img" /></a>
                    <a href="https://www.linkedin.com/company/25watts/"><img src={youtube} alt="Img" /></a>
                    <a href="https://www.linkedin.com/company/25watts/"><img src={linkedin} alt="Img" /></a>
                </div>
            </div>
        </div>
    )
}