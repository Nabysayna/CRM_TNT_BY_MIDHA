import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';
import { AffectationService } from '../service/affectation.service';


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
  listePorteFeuille:any =[];
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
 
  Categorie = [
    {cat:'finaliser'},
    {cat:'A rappeller'},
    {cat:'Mécontent'}
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
    //this.listeAppel.splice(i,1); 
    this.porte(); 
  }

  constructor(private modalService: BsModalService,public commercialeService:AffectationService) { }

  tel:string;
  infos:any= [];
  nom:string;
  prenom:string;
  etat(i:number){
    if(i==0){
      return 'en cours';
    }else if(i==1){
      return 'terminé';
    }else {
      return 'échéance proche';
    }
  }
  abEtat:string;
  getTel(i:number){
    
    this.tel=this.listeAppel[i].Phone;
    this.nom=this.listeAppel[i].Lastname;
    this.prenom=this.listeAppel[i].Firstname;
    console.log(this.tel);
      this.commercialeService.getEtat(localStorage.getItem("token"),this.tel).subscribe(data =>{
       
        this.infos=data['message'];
        this.abEtat=this.etat(this.infos.etat);
      });
      }
      categoties:string='';
     
     
      telCat:string;
      getTelCat(i:number){
        this.telCat=this.listeAppel[i].Phone;
       // console.log("tel for Cat "+this.telCat+" catégorie "+this.categoties+" Commentaire "+this.commentaires);
        console.log(this.commercialeService.finaliser(localStorage.getItem("token"),this.tel,this.commentaires,this.categoties));
      }
      modalRef1: BsModalRef;
      openModal1(template1: TemplateRef<any>) {
        this.modalRef1 = this.modalService.show(template1);
      }
      modalRef2: BsModalRef;
      openModal2(template2: TemplateRef<any>) {
        this.modalRef2 = this.modalService.show(template2);
      }
  ngOnInit() {
   
    this.commercialeService.getClientCC(localStorage.getItem("token")).subscribe(data =>{
       console.log(localStorage.getItem("token"));
      this.listeAppel=data['message'];
     
     // this.returnedArray = this.contentArray.slice(0, 20);
    });
  }

}
