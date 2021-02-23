import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'movieAsset'
})
export class MovieAssetPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value?: string): SafeUrl {
    if(!value) {
      return './assets/images/no-image.jpg'
    }
    const path = 'https://image.tmdb.org/t/p/w500'
    return this.sanitizer.bypassSecurityTrustUrl(`${path}${value}`)
  }

}
