import { useSelector } from "react-redux";
import style from "./moreDetails.module.css";

export default function MoreDetails() {
    const moreDetails = useSelector(state => state.moreDetails)

    return (
        <div>
            {
                moreDetails.map((e, i) => {
                    return (
                        <div className={style.containerAll} key={i}>
                            <h1>More Details</h1>
                            <h4>{e.descripcion}</h4>
                            <div className={style.containerIcons} >
                                <div className={style.centradoContenidoIconsIzquierda}>
                                    {
                                        e.iconosIzquierda.map((j, h) => {
                                            return (
                                                <div className={style.descriptionMasImg} key={h}>
                                                    <img src={j.imagen} alt="Img" />
                                                    <h3>{j.descripcion}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={style.centradoContenidoIconsDerecha}>
                                    {
                                        e.iconosDerecha.map((j, h) => {
                                            return (
                                                <div className={style.descriptionMasImg} key={h}>
                                                    <img src={j.imagen} alt="Img" />
                                                    <h3>{j.descripcion}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}