export interface ProductDto {
    name: string;
    id: string;
    img: string;
    price: number;
    colour: string;
}

export interface DropdownDto {
    name: string;
    options: SelectDto[];
    selectedValue: (e: string) => void
}

export interface SelectDto {
    value: string;
    label: string;
}


export type ContextState = {
    items: ProductDto[],
    addToCart: (e: ProductDto[]) => void,
    removeAllItems: (e: string) => void,
    removeItem: (e: string) => void,
}