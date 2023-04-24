
const validator = new JustValidate('#basic_form', {
  validateBeforeSubmitting: true,
});
console.log(validator);
validator.addField('#name', [
  {
    rule: 'required',
  },
  {
    rule: 'customRegexp',
    value: /[a-z]/gi,
  },
  {
    rule: 'minLength',
    value: 10,
  },
  {
    rule: 'maxLength',
    value: 15,
  },

]).addField('#number', [
  {
    rule: 'required',
  },
  {
    rule: 'number',
  },
  {
    rule: 'minNumber',
    value: 10,
  },
  {
    rule: 'maxLength',
    value: 12,
  }

]).addField('#regnDoctor', [
  {
    rule: 'required',
  }

]).addField('#regnDoctor', [
  {
    rule: 'required',
  }

]).addField('#formDate', [
  {
    rule: 'required',
  }

]).addField('#checkMe', [
  {
    rule: 'required',
  }

]).addField('#info', [
  {
    rule: 'customRegexp',
    value: /[a-z]/gi,
  }

  

])

console.log(validator.onValidate())



