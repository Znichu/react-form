import React, {useState} from "react";

function useFormFields<T>(initialValues: T) {
    const [formFields, setFormFields] = useState<T>(initialValues);
    const createChangeHandler = (key: keyof T) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormFields((prev: T) => ({ ...prev, [key]: value }));
    };
    return { formFields, createChangeHandler };
}
export default useFormFields