import { Pipe, PipeTransform } from '@angular/core';
import { BesoinOffre } from './models/besoin-offre';

@Pipe({
  name: 'besoinoffreFilterPipe'
})
export class BesoinOffreFilterPipePipe implements PipeTransform {

  transform(list: BesoinOffre[], searchTxt:string): any {
    if (!list)
      return [];
    if (!searchTxt)
      return list;
    searchTxt = searchTxt.toLocaleLowerCase();

    list = list.filter(f => {
      return f.name_besoin.toLocaleLowerCase().includes(searchTxt);
    });
    return list;
  }

}
