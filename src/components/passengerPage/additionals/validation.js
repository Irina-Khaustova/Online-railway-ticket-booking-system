export default function validationString(value) {
    const phoneRegex = /^[а-яА-Я]+$/;
    console.log(phoneRegex.test(value))

     return phoneRegex.test(value);
}