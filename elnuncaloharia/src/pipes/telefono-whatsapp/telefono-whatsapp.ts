import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TelefonoWhatsappPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'telefonoWhatsapp',
})
export class TelefonoWhatsappPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    let valueNum = value.replace(/\D/g,'');
    let valueEnd = valueNum.substr(-9, 9);
    if (valueEnd.substr(0,1) == "6" && valueEnd.length == 9){
      return valueEnd;
    } else {
      return "No es un numero de whatsapp";
    }
  }
}
