import { FC, useState } from "react";
import style from "./Dropdown.module.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownDto, SelectDto } from "../../../Interface/Interface";

export const Dropdown: FC<DropdownDto> = ({ name, options, selectedValue }) => {

    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
        selectedValue(event.target.value)
    };

    return (
        <div className={style.dropdown}>
            <FormControl className={style.colourFilter} >
                <Select
                    value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange} >
                    <MenuItem value="">{name}</MenuItem>
                    {options.map((option: SelectDto, index: number) => {
                        return <MenuItem value={option.value} key={index}>{option.label}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

