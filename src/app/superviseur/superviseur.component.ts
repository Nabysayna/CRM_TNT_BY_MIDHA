import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from '../../../node_modules/ngx-bootstrap/modal';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.component.html',
  styleUrls: ['./superviseur.component.css']
})
export class SuperviseurComponent implements OnInit {

  liste:number=0;
  port:number=0;
  filtres:string;
  listeAppel =[];
  commentaires:string;
  listePorteFeuille =[];
  lpf = [];
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
    {prenom:'Amadou',nom:'Ba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1},
    {prenom:'Fatou',nom:'Diop', tel:'779654263',commentaire:'gvhvhbjh ibhjb', etat:2},
    {prenom:'Adama',nom:'fall', tel:'779866263',commentaire:'gvhvhbjh ibhjb', etat:3},
    {prenom:'Issa',nom:'Tamba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1},
    {prenom:'Samba',nom:'Sow', tel:'779888263',commentaire:'gvhvhbjh ibhjb', etat:2},
    {prenom:'Ndeye',nom:'Gueye', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1},
    {prenom:'Anta',nom:'Niang', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:2},
    {prenom:'Fallou',nom:'Fall', tel:'779121426',commentaire:'gvhvhbjh ibhjb', etat:1},
    {prenom:'Awa',nom:'Diouf', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:3},
    {prenom:'Youssou',nom:'Ba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:3},
    {prenom:'Ablaye',nom:'Barry', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1}
  ]
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  porte(){
      this.liste=1;
      this.port=1;
  }
  abonner(i : number){
    alert(this.listeAppel[i].etat);
    //for(let a of this.listeAppel[i]){
      this.listeAppel[i].etat=3;
     alert( this.listeAppel[i].a.etat);
   // }
  }
  listeA(){
    this.liste=0;
    this.port=0;
  }
  finaliser(i : number){
    this.listePorteFeuille.push(this.listeAppel[i]);
    this.listeAppel.splice(i,1); 
    this.porte(); 
  }

  comment(i :number){
    alert(this.commentaires);
     if(this.listeAppel[i]){
       for(let a of this.listeAppel[i]){
         alert( a.commentaire);
          a.commentaire=this.commentaires;
       }
     }
  }
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}
