export const fieldValidation = (fieldName: string, fieldValue: string) => {
    if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
            .test(fieldValue)
    ) {
        return null;
    }
    if (fieldValue.trim() === "") {
        return "Field is required";
    }
    return "Invalid characters";
};