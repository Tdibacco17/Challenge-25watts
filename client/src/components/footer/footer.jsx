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
                <h4>About</h4>
                <h4>Services</h4>
                <h4>Products</h4>
                <h4>Details</h4>
                <h4>Contact</h4>
            </div>

            <div className={style.containerIconos}>
                <h3>Follow us</h3>
                <div className={style.containerIconosEspaciado}>
                    <img src={instagram} alt="Img" />
                    <img src={facebook} alt="Img" />
                    <img src={twitter} alt="Img" />
                    <img src={youtube} alt="Img" />
                    <img src={linkedin} alt="Img" />
                </div>
            </div>
        </div>
    )
}