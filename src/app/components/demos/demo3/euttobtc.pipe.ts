import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euttobtc'
})
export class EuttobtcPipe implements PipeTransform {

  transform(value: number): string {
    return value / 39942 + ' BTC';
  }

}
