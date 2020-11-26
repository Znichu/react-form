import React from "react";

type PropsType = {
    placeholder: string
    name: string
    error?: string
    value?: string | number
    type: string
    checked?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({placeholder, name, error, value, type, checked, onChange}) => {
    return (
        <label>
            <span className="span">{placeholder}</span>
            <input
                name={name}
                type={type}
                id={`id-${name}`}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            {!!error && <span className="errorText">{error}</span>}
        </label>
    )
}