module.exports.signUpErrors = (error) => {
    let errors = { pseudo: '', email: '', password: 'mauvais password' };
    console.log(error.message.includes('pseudo'));

    if (error.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (error.message.includes('email'))
        error.email = 'Email incorrect';

    if (error.message.includes('password'))
        errors.password = 'Le mot de passe doit faire 6 caractères minimum';

    if (error.code === 11000 && Object.keys(error.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (error.code === 11000 && Object.keys(error.keyValue)[0].includes('email'))
        error.email = 'Email incorrect';

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' }
    if (err.message.includes("email"))
        errors.email = "Email inconnu";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe ne correspond pas"

    return errors
}


module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: " " };

    if (err.message.includes('invalid file'))
        errors.format = "Format incompatible"

    if (err.message.includes('max size'))
        errors.maxSize = "Le fichier dépasse 500ko"
        
    return errors
}