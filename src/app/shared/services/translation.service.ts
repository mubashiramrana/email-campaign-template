import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TransaltionService {
  public languages: string[] = ['en', 'ar'];

  constructor(public translate: TranslateService) {
    let browserLang;
    this.translate.addLangs(this.languages);
    // if (this.cookieService.check('lang')) {
    //   browserLang = this.cookieService.get('lang');
    // }
    // else {
    //   browserLang = translate.getBrowserLang();
    // }
    //translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    translate.use('en');
  }

  public setLanguage(lang:string) {
    this.translate.use(lang);
    //this.cookieService.set('lang', lang);
  }
}
