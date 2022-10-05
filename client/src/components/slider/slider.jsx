import { useSelector } from "react-redux";
import style from "./slider.module.css"

export default function Slider() {

    const slider = useSelector(state => state.slider)

    return (
        <div className={style.containerAll}>
            <input type="radio" id="1" name="image_slide" hidden />
            <input type="radio" id="2" name="image_slide" hidden />
            <input type="radio" id="3" name="image_slide" hidden />

            <div className={style.slide}>
                {
                    slider.map((e, i) => {
                        return (
                            <div key={i} className={style.slideItem}>
                                <h1>{e.titulo}</h1>
                                <h4>{e.descripcion}</h4>
                                <img src={e.imagen} alt="Img" />
                                <button>Read more</button>
                            </div>
                        )
                    })
                }
            </div>

            <div className={style.pagination}>
                <label className={style.paginationItem} htmlFor="1" />
                <label className={style.paginationItem} htmlFor="2" />
                <label className={style.paginationItem} htmlFor="3" />
            </div>
        </div>
    )
}