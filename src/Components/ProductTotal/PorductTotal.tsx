import { UseStateValue } from "../../Contexts/GeneralProvider";
import { ProductDto } from "../../Interface/Interface";
import style from './ProductTotal.module.css'

export const ProductTotal = () => {
    const { items } = UseStateValue();
    const getTotal = () => items?.reduce((amount: number, item: ProductDto) => item.price + amount, 0)
    return (
        <div className={style.subtotal}>
            Subtotal ({items.length} items): <strong><small>Є</small> {getTotal()}</strong>
        </div>
    );
}

