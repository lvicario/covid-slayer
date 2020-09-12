export const isObjectEmpty = (obj: any) => {
    return !(Object.getOwnPropertyNames(obj).length >= 1)
};
