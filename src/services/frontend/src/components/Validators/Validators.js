export const userNameValidator = (data) => {
    if (data != '') {
        if (!data.match(/[A-Z]/)) {
            let length = data.length;
            if (length >= 4) {
                return true;
            } else {
                return 'Username must more then 4 character';
            }
        } else {
            return 'Username must not has Capital letter';
        }
    } else {
        return 'Username must not be empty';
    }
};

export const firstNameValidator = (data) => {
    let name = new RegExp('[A-Z][a-z]');
    if (data != '') {
        if (!data.match(/[0-9]/)) {
            if (name.test(data)) {
                return true;
            } else {
                return 'First letter of first_name must be capital letter';
            }
        } else {
            return 'Here must not be number';
        }
    } else {
        return 'First_name must not be empty';
    }
};

export const emailValidator = (data) => {
    var validRegex =
        /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
    if (data != '') {
        if (validRegex.test(data)) {
            return true;
        } else {
            return 'Invalid Email';
        }
    } else {
        return 'Email must not be empty';
    }
};

export const passwordValidator = (data) => {
    let password = new RegExp('[A-Z][a-z]');
    if (data != '') {
        if (password.test(data)) {
            if (data.match(/[0-9]/)) {
                if (data.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=]/)) {
                    let length = data.length;
                    if (length >= 8) {
                        return true;
                    } else {
                        return 'Password must more then 8 character';
                    }
                } else {
                    return 'Password at less must have one special character ';
                }
            } else {
                return 'Password must contain number';
            }
        } else {
            return 'Password at less must have one capital and one lower case letter';
        }
    } else {
        return 'Password must not be empty';
    }
};
