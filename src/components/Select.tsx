import React from "react";

type PropsType = {
    options: string[]
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select :React.FC<PropsType> = ({options, placeholder, value, onChange}) => {
    return (
        <label>
            {placeholder}
            <select value={value} onChange={onChange}>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </label>
    )
}