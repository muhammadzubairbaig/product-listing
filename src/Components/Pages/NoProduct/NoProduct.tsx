import style from "./NoProduct.module.css";

export const NoProduct = () => {
    return (
        <div className={style.no__product}>
            <div className={style.cart}>
                <h2>
                    No products Available</h2>
            </div>
        </div>
    )
}
