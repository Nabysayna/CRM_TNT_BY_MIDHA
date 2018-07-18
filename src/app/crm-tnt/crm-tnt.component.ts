import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';

@Component({
  selector: 'app-crm-tnt',
  templateUrl: './crm-tnt.component.html',
  styleUrls: ['./crm-tnt.component.css']
})
export class CrmTntComponent implements OnInit {
  liste:number=0;
  port:number=0;
  filtres:string;
  filtrePortFeuille:number;
  rouge(){
    this.filtrePortFeuille=1;
  }
  orange(){
    this.filtrePortFeuille=2;
  }
  vert(){
    this.filtrePortFeuille=3;
  }
  tout(){
    this.filtrePortFeuille=null;
  }
  getColor(etat){
    switch(etat){
      case 1:
        return 'red';
        case 2:
        return 'orange';
        case 3 :
        return 'green';
    }
  }
  Abonner = [
    {prenom:'Amadou',nom:'Ba', tel:'779854263', etat:1},
    {prenom:'Fatou',nom:'Diiop', tel:'779654263', etat:2},
    {prenom:'Adama',nom:'fall', tel:'779866263', etat:3},
    {prenom:'Issa',nom:'Tamba', tel:'779854263', etat:1},
    {prenom:'Samba',nom:'Soz', tel:'779888263', etat:2},
    {prenom:'Ndeye',nom:'Gueye', tel:'779854263', etat:1},
    {prenom:'Anta',nom:'Niang', tel:'779854263', etat:2},
    {prenom:'Fallou',nom:'Fall', tel:'7791214263', etat:1},
    {prenom:'Awa',nom:'Diouf', tel:'779854263', etat:3},
    {prenom:'Youssou',nom:'Ba', tel:'779854263', etat:3},
    {prenom:'Ablaye',nom:'Barry', tel:'779854263', etat:1}
  ]
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  porte(){
      this.liste=1;
      this.port=1;
  }
  listeA(){
    this.liste=0;
    this.port=0;
  }
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}
