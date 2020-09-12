import { isObjectEmpty } from "./isObjectEmpty";

export const getErrorMessage = (err: any) => {
    return (err.response && err.response.data || err.message);
};
