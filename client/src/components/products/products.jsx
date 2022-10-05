import { useSelector } from "react-redux";
import style from "./products.module.css";

export default function Products() {

    const products = useSelector(state => state.products)
    return (
        <div className={style.containerAll}>
            <h3>Products</h3>
            <h1>In eget tortor tempor mollis purus</h1>
        </div>
    )
}