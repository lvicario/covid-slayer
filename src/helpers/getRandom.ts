export const getRandom = (start: number, end: number) => {
    return start + Math.round(Math.random() * (end - start));
}
