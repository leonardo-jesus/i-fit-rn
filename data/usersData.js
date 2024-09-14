
let usersData = [
    { email: 'test@test.com', password: '123456' }, // Usuário de exemplo
];

export const addUser = (email, password) => {
    usersData.push({ email, password });
};

export const findUser = (email, password) => {
    return usersData.find((user) => user.email === email && user.password === password);
};

export const isUserExists = (email) => {
    return usersData.some((user) => user.email === email);
};
