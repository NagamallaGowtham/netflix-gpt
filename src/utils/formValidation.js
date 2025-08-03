export const formValidation = (email, password) => {
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const errorMsg = {};

    if (!validateEmail) errorMsg['email'] = 'Email is not valid';
    if (!validatePassword) errorMsg['password'] = 'Password is not valid';

    return errorMsg;
}