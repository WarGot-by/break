const required = (value: string) => {
    return (value.length > 0);
};

const email = (value: string) => {
    return value.toLowerCase().match(/^([\w-]+\.)*[\w-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)
};

const minLength = (value: string, min: number) => {
    return (value.length >= min)
};

const valueIsEmpty = (value: string) => {
    return value.trim().length === 0
};

const validationSet = {
    required,
    email,
    minLength,
    valueIsEmpty
};

export default validationSet;
