import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  libelleFormulaire: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        const urlStringArray = event.url.split('/', 3);
        this.libelleFormulaire = urlStringArray[urlStringArray.length - 1].replace(/[^A-Z0-9]/ig, " ");

        console.log(this.libelleFormulaire);
      }
      // NavigationEnd
      // NaviationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
