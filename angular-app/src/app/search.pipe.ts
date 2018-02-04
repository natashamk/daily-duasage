import { Pipe, PipeTransform } from '@angular/core';



@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
  return items.filter(it => {
    // console.log(it);
    var duaSearch=it.name.toLowerCase().includes(searchText);
    console.log("piping")
    return duaSearch ;
  });
    }
  }