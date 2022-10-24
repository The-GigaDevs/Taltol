export const validatePassword = (pwd) => {
    const regex = '/^(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/'
    return regex.match(pwd)
}

export const CaluclatetotalPages = (count, setPages) => {
    let pages = Math.ceil(count / 30);
    setPages(pages);
};