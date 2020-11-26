import React from "react";

type PropsType = {
    placeholder: string
    name: string
    error?: string
    value?: string | number
    type: string
    checked?: boolean
    required?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({placeholder, name, error, value, type, checked, required, onChange}) => {
    return (
        <label>
            <span className="span">{placeholder}</span>
            <input
                name={name}
                type={type}
                value={value}
                checked={checked}
                onChange={onChange}
                required={required}
            />
            {!!error && <span className="errorText">{error}</span>}
        </label>
    )
}