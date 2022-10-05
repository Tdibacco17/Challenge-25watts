import imagen from "./urn_aaid_sc_US_6917e143-6516-4abf-80f3-6062b95b4ebc.png"
import style from "./contact.module.css";

export default function Contact() {


    return (
        <div className={style.containerAll}>
            <div className={style.titulo}>
                <h1>Get in touch</h1>
                <h1 id={style.tituloNaranja}>We are hiring!</h1>
            </div>
            <img
                src={imagen}
                atl="Img" />
            <div className={style.formulario}>
                <form >
                    <div>
                        <input
                            id={style.tituloNegro}
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div>
                        <input
                            id={style.tituloNegro}
                            type="text"
                            placeholder="info@25watts.com.ar" />
                    </div>
                    <div>
                        <input
                            id={style.tituloNegro}
                            type="text"
                            placeholder="Phone" />
                    </div>
                    <div>
                        <textarea
                            id={style.tituloNegro}
                            placeholder="Message" />
                    </div>
                    <button>Send</button>
                </form>
            </div>
            <div className={style.containerAll2} />
        </div>
    )
}