import { Component, OnInit, TemplateRef, Input } from '@angular/core';
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
  @Input() listeAppel =[];
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
  getEtat(etat,i:number){
    
    if(this.listeAppel[i].etat==1)
    {
      alert('non abonné');
    }else if(this.listeAppel[i].etat==2)
    {
      alert('délais proche');
    }else if(this.listeAppel[i].etat==3)
    {
      alert('abonné');
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
    //alert(this.commentaires);
     //if(this.listeAppel[i]){
       for(let a of this.listeAppel){
        // alert( a.commentaire);
          a.commentaire=this.commentaires;
       }
    // }
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    for(let lp of this.Abonner){
      this.listeAppel.push(lp);
    }
  }

}
