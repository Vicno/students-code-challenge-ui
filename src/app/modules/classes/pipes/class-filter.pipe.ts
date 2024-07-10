import { Pipe, PipeTransform } from '@angular/core';
import { Class } from '../../../shared/models/class.model';

@Pipe({
  name: 'classFilter',
})
export class ClassFilterPipe implements PipeTransform {
  transform(classes: Class[], searchTerm: string): Class[] {
    if (!classes || !searchTerm) {
      return classes;
    }

    return classes.filter(
      (classs) =>
        classs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classs.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
