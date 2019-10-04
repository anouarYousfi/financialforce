
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ConsultationModel} from '../../../shared/model/consultation.model';
import { ConsultationService } from '../../../shared/services/consultation.service';
import { Router } from '@angular/router';
import { FournisseurModel } from '../../../shared/model/fournisseur.model';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss'],
  providers: [ConsultationService]
})

export class ConsultationsComponent implements OnInit {
  @ViewChild('f') formConsul: NgForm;

  // configuration de l'éditeur du text utilisé
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '18rem',
    minHeight: '5rem',
    placeholder: 'Saissez le contenu de la consultation ici ...',
    translate: 'no'
  };

  htmlContent: string;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  router: Router;
  errorMessage: string;

  constructor(private consultationsService: ConsultationService) { }
  ngOnInit(): void {
    console.log(this.formConsul);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('fr-FR', options);

    // ToDo récuperer le numero de la derniere consultation enregistrée dans la table consultation
    const idConsultation = 120;

    setTimeout(() => {
      this.formConsul.form.patchValue({
        dateCreation: currentDate.toString(),
        idConsultation: idConsultation
      });
    });

    // ToDo recupérer la liste de noms fournissuers
    this.dropdownList =   ['  1: societe 1', ' 2 : société 2' , ' 3 : société 3', '4 : société 4','5 : société 5'];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'selectionner tout',
      unSelectAllText: 'tout déselectionner',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  onSubmit() {
    const consultations = [];
    for(let i = 0; i < this.selectedItems.length; i++){

    
       consultations[i] =new ConsultationModel();

    consultations[i].idConsultation = this.formConsul.value.idConsultation;
    consultations[i].dateCreation = this.formConsul.value.dateCreation;
    consultations[i].objet = this.formConsul.value.objet;
    consultations[i].message = this.htmlContent;
    consultations[i].fournisseurList = new FournisseurModel()
    consultations[i].fournisseurList.pid = parseInt(this.selectedItems[i]);

    // ToDo comment implementer l'utilisation de la table materiel
    // consultation.materiel.designation = this.formConsul.value.me;

    this.consultationsService.consultation = consultations[i];
  
    this.consultationsService.postConsultation(consultations[i]).subscribe(data => {
      this.router.navigate(['/consultation']);
    }, err => {
      console.log(err);
      this.errorMessage = "cons already exist";
    }
  );

    console.log(consultations[i]);
  }
}

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

