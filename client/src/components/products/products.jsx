import { useSelector } from "react-redux";
import style from "./products.module.css";
import iconoIzq from "./imagenes/Icon awesome-chevron-left.png";
import iconoDer from "./imagenes/Icon awesome-chevron-right.png";
import { useState } from "react";

export default function Products() {

    const products = useSelector(state => state.products)

    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(3)

    const maximo = products.length / porPagina;

    const nextPage = () => {
        setPagina(pagina + 1);
    }

    const previousPage = () => {
        setPagina(pagina - 1);
    }

    return (
        <div className={style.containerAll}>
            <h3>Products</h3>
            <h1>In eget tortor tempor mollis purus</h1>
            <div className={style.containerCardsPaginado}>
                <button id={style.buttonPrevious} disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
                    <img src={iconoIzq} alt="Img" />
                </button>
                {
                    products.slice(
                        (pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina
                    ).map((e, i) => {
                        return (
                            <div className={style.containerCards} key={i}>
                                <div className={style.containerCardsTitulo}>
                                    <h2>{e.titulo.slice(0, 14)}</h2>
                                    <h2>{e.titulo.slice(14)}</h2>
                                </div>
                                <div className={style.cardContent}>
                                    {
                                        e.descripcion.split("-").map((h, j) => {
                                            return (
                                                <h4 key={j}>
                                                    {h}
                                                </h4>
                                            )
                                        })
                                    }
                                    <div id="MoreDetails"/>
                                </div>
                            </div>
                        )
                    })
                }

                <button id={style.buttonNext} disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)} onClick={nextPage}>
                    <img src={iconoDer} alt="Img" />
                </button>
            </div>
        </div>
    )
}