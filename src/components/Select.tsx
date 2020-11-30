import React from "react";

type PropsType = {
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>) => void
}

const options = ["wifi1", "wifi2", "wifi3"];

export const Select :React.FC<PropsType> = ({placeholder, value, onChange}) => {
    return (
        <label>
            {placeholder}
            <select name={"wirelessNetworkName"} defaultValue={""} onChange={onChange}>
                <option value="" disabled>Please select</option>
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </label>
    )
}