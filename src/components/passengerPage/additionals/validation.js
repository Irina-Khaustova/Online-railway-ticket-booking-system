export default function validation(type, value) {

      if (value === '') return false;
    
      const stringRegex = /^[а-яА-Я]+$/;
      const passportSeriesRegex = /^([0-9]{2}\s{1}[0-9]{2})?$/;
      const passportNumberRegex = /^([0-9]{6})?$/;
      const sertificateNumberRegex = /^([IVX]{3}[-]{1}[а-яА-Я]{2}[-]{1}[0-9]{6})?$/;
      const telephoneRegex =/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
      const eMailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
      
      const a = type === 'string'? stringRegex.test(value) :
      type === 'passportSeries'? passportSeriesRegex.test(value):
      type === 'passportNumber'? passportNumberRegex.test(value):
      type === 'sertificateNumber'? sertificateNumberRegex.test(value):
      type === 'telephone'? telephoneRegex.test(value):
      type === 'eMail'? eMailRegex.test(value): 
      null;

     return a;
}