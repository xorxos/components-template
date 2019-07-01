import * as libphonenumber from 'google-libphonenumber';

export class Country {
  iso: string;
  name: string;
  code: string;
  samplePhone: string;
  phoneMask: Array<Object>;

  constructor(iso: string, name: string) {
    this.iso = iso;
    this.name = name;

    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const PNF = libphonenumber.PhoneNumberFormat;
    const PNT = libphonenumber.PhoneNumberType;
    const countryExampleNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE);
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo: https://goo.gl/3yAFiV
    if (countryExampleNumber) {
      const exampleNumberFormatted = phoneUtil.format(countryExampleNumber, PNF.NATIONAL);
      // We need to define how are we going to format the phone number
      // You can choose between many formats including:
      //    - NATIONAL
      //    - INTERNATIONAL
      //    - E164
      //    - RFC3966
      this.samplePhone = exampleNumberFormatted;
      this.code = '+' + countryExampleNumber.getCountryCode();

      // Now let's transform the formatted example number into a valid text-mask
      // Inspired in text-mask example (https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask)
      this.phoneMask = this.getMaskFromString(exampleNumberFormatted);
    }
  }

  getMaskFromString(s: string): Array<Object> {
    const stringChars = s.split('');
    const digitRegExp = new RegExp(/\d/);
    const mask = stringChars.map(char => {
          // Replace any digit with a digit RegExp
          return (digitRegExp.test(char)) ? digitRegExp : char;
        });

    return mask;
  }
}