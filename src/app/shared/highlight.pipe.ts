import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name : 'highlight-text'
})
export class HighlightMatchedText implements PipeTransform{
      transform(value : any , match : string): string{
          return value.replace(value , '<mark>+match+</mark>');
      }
}