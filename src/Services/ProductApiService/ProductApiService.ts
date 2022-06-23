import { Axios } from '../Axios';

export const ProductApiService = (() => {
    /**
     *
     * @private_methods
     */

    /**
     *
     * @param params contains roles params
     * @returns Promise
     */
    const getProducts = (): Promise<any> => Axios.get('products/products');


    return {
        getProducts,
    };
})();
