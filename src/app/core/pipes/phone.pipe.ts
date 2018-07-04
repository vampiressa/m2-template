import {Pipe} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe {

  public transform(tel, args) {
    let value = tel.toString().trim().replace(/^\+|-|\(|\)/g, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    let country, city, number;

    switch (value.length) {
      case 11:
        country = value[0];
        city = value.slice(1, 4);
        number = value.slice(4);
        break;

      default:
        return tel;
    }

    if (country == 1) {
      country = '';
    }

    number = number.slice(0, 3) + '-' + number.slice(3, 5) + '-' + number.slice(5, 7);

    return ('+' + country + ' (' + city + ') ' + number).trim();
  }

}
