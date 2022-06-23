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
