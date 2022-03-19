import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    console.log(cocktails);
    if (!search.length) {
      return cocktails;
    } else {
      return cocktails.filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
  }

}