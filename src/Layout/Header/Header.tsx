import style from './Header.module.css'
import {  AddShoppingCart } from '@mui/icons-material'
import { UseStateValue } from '../../Contexts/GeneralProvider';
export const Header = () => {
  const { items } = UseStateValue();

  return (
    <>
      <div className={style.header}>
        <div>
          Product Listing Page
        </div>
        <div className={style.header__optionBasket}>
              <AddShoppingCart className={style.header__basketCountIcon} />
              <span className={`${style.header__optionLineTwo} ${style.header__basketCount}`}>
                {items && items.length}
              </span>
            </div>
      </div> 
    </>
  )
}
