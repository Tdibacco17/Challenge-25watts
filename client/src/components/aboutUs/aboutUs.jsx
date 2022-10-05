import { useSelector } from "react-redux";
import style from "./aboutUs.module.css";

export default function AboutUs() {
    const aboutUs = useSelector(state => state.aboutUs)
    return (
        <div className={style.containerAll}>
            {
                aboutUs.map((e, i) => {
                    return (
                        <div className={style.containerContent} key={i}>
                            <div className={style.containerImage}>
                                <div className={style.borderOrange}/>
                                <img src={e.imagen} alt="Img" />
                            </div>
                            <div className={style.containerText}>
                                <div>
                                    <h1 >{e.titulo.slice(0, 8)}</h1>
                                    <h1 id={style.tituloNaranja}>{e.titulo.slice(8)}</h1>
                                </div>
                                <h4>{e.descripcion}</h4>
                                <button>More info</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}