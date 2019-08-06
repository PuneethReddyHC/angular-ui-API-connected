import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private domSanitizer: DomSanitizer,  private matIconRegistry: MatIconRegistry,) {
        // translate.setDefaultLang('en');
        this.matIconRegistry.addSvgIcon(
            'hospital',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hospital.svg')
        );
    }

    ngOnInit() {
    }
}
