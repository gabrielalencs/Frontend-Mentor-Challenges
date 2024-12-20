export const hasError = (errorsObj: { [key: string]: string }, field: string) => {
    return errorsObj.hasOwnProperty(field);
};