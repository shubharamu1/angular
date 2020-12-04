import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  
    // if (search) {
    //   return customers.filter(customers => {
    //     return customers.firstname.toLowerCase().includes(search.toLowerCase())||customers.lastname.toLowerCase().includes(search.toLowerCase());
    //   });
    // } else {
    //   return customers;
    return null
    
  }


}
