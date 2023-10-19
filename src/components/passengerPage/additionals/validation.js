export default function validationString(value) {
    const stringRegex = /^[а-яА-Я]+$/;
    console.log(stringRegex.test(value))

     return stringRegex.test(value);
}


export  function validationTel(value) {
    const phoneRegex =/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
    console.log(phoneRegex.test(value))

     return phoneRegex.test(value);
}
