import { useSelector } from "react-redux";
import style from "./services.module.css"

export default function Services() {

    const services = useSelector(state => state.services)

    return (
        <div >
            {
                services.map((e, i) => {
                    return (
                        <div className={style.containerAll} key={i}>
                            <h1>Services</h1>
                            <h4>{e.descripcion}</h4>
                            <div className={style.containerIcons} >
                            {
                                e.iconos.map((j, h) => {
                                    return (
                                        <div className={style.centradoContenidoIcons} key={h}>
                                                <img src={j.imagen} alt="Img" />
                                                <h3 id="Products">{j.descripcion}</h3>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}