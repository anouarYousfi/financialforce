import {MaterielModel} from './materiel.model';
import { FournisseurModel } from './fournisseur.model';

export class ConsultationModel {
  idConsultation: number;
  objet: string;
  dateCreation: string;
  lieuConsultation: string;
  message: string;
  fournisseurList: FournisseurModel[];
}
