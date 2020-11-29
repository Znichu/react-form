import React from 'react';

type PropsType = {
    placeholder: string
    name: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>) => void
}

export const Radio: React.FC<PropsType> = ({placeholder, name, checked, onChange}) => {
    return (
        <label>
            <span>{placeholder}</span>
            <input
                name={name}
                type={"radio"}
                value={0}
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};
