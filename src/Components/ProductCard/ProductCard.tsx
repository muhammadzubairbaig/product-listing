import { Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { UseStateValue } from '../../Contexts/GeneralProvider';
import { ProductDto } from '../../Interface/Interface';
import style from './ProductCard.module.css'

export const ProductCard: FC<ProductDto> = ({ id, img, name, price, colour }) => {

    const { addToCart, items, removeItem, removeAllItems } = UseStateValue();
    const [cartItem, setCartItem] = useState<ProductDto[]>([]);
    
    const addToBasket = () => {
        addToCart([{ id, name, img, price, colour }]);
    };

    useEffect(() => {
        let filteredItems: ProductDto[] = items.filter((res: ProductDto) => res.id === id);
        setCartItem(filteredItems)
    }, [items, id])

    const handleRemoveItem = () => {
        removeItem(id);
    };

    const handleRemoveAllItems = () => {
        removeAllItems(id);
    };

    return (
        <Grid container className={style.productCard}>

            <Grid item md={2}>
                <img className={style.product__image} src={img} alt='banner-img' />
            </Grid>

            <Grid item md={6} xs={6}>
                <div className={style.product__info}>
                    <p className={style.product__title}>{name}</p>
                    <p className={style.product__price}>
                        <small>Є</small>
                        <strong>{price}</strong>
                    </p>

                </div>
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
                <div className={style.options}>
                    <button className={`${style.pointer} ${style.deleteBtn} ${style.btn}`} onClick={handleRemoveItem}>-</button>
                    <div>
                        <div className={`${style.qtyAvailable}`}>{cartItem.length}</div>
                        <div className={`${style.qtyAvailable}`}>Qty</div>
                        <div className={`${style.pointer} ${style.remove}`} onClick={handleRemoveAllItems}>Remove</div>
                    </div>
                    <button className={`${style.pointer} ${style.btn}`} 
                    id='decrement-btn' onClick={addToBasket}>+</button>
                </div>
            </Grid>

        </Grid>
    )
}

