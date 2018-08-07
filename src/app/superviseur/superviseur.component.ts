import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from '../../../node_modules/ngx-bootstrap/modal';
import { AffectationService } from '../service/affectation.service';
import { PageChangedEvent } from '../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.component.html',
  styleUrls: ['./superviseur.component.css']
})
export class SuperviseurComponent implements OnInit {
  
  contentArray:any = [];
  returnedArray:any=[];
  listeCC:any;
  listeClients:any;
  liste:number=0;
  port:number=0;
  filtres:string;
  listeClient =[];
  commentaires:string;
  listePorteFeuille =[];
  affect:number=0;
  coch:number=0;
  filtrePortFeuille:number;
  //checkbox
  chck:number=0;
  coche(){
    //alert(this.chck);
    this.chck=1;
   // alert(this.chck);
  }
  check = false;
  
  checks(){
    this.check = true;
  }
  uncheck(){
    
  }

  suivi(){
    this.affect=2;
    this.liste=1;
    this.port=0;
  }
  //checkbox
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
    
     if(this.listeClient[i].etat==1)
     {
       alert('non abonné');
     }else if(this.listeClient[i].etat==2)
     {
       alert('délais proche');
     }else if(this.listeClient[i].etat==3)
     {
       alert('abonné');
     }
  }
 
 
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRef1: BsModalRef;
  openModal1(template1: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(template1);
  }
  modalRef2: BsModalRef;
  openModal2(template2: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template2);
  }

  porte(){
      this.liste=1;
      this.port=1;
      this.affect=0;
  }
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
    
    this.tel=this.returnedArray[i].Phone;
    this.nom=this.returnedArray[i].Lastname;
    this.prenom=this.returnedArray[i].Firstname;
    console.log(this.tel);
   /* this.affectationService.demandeClient(localStorage.getItem("token"),this.id).subscribe(data =>{
      this.demandeListe=data['message'];
      for(let d of this.demandeListe){
        this.contentArray.push(d);
      }*/
      this.affectationService.getEtat(localStorage.getItem("token"),this.tel).subscribe(data =>{
       
        this.infos=data['message'];
        this.abEtat=this.etat(this.infos.etat);
        //for(let i of this.infos){
         // console.log(i.etat+" et "+i.date);
        //}
      });
      }
  abonner(i : number){
    //alert(this.listeAppel[i].etat);
    //for(let a of this.listeAppel[i]){
      this.listeClient[i].etat=3;
     alert( this.listeClient[i].a.etat);
   // }
  }
  cocher(i:number){
     // alert("cocher");
     this.coch=1;
     console.log("this.coch");
     // alert( this.Abonner[i].cocher);
  }
  
  listeA(){
    this.liste=0;
    this.port=0;
    this.affect=0;
  }
  finaliser(i : number){
    this.listePorteFeuille.push(this.listeClient[i]);
    this.listeClient.splice(i,1); 
    this.porte(); 
  }
  affectationList =[];
  affecter(i :number){
      this.affectationList.push(this.returnedArray[i]);
      for(let l of this.affectationList){
        console.log("Client "+l.Firstname,l.Lastname,l.Phone);
      }
 
  }
  remove(i){
    this.affectationList.splice(i,1);
  }
  affecters(){
     console.log(this.affectationService.affectation(localStorage.getItem("token"),this.affectationList,this.TelCC).subscribe(data =>{
     console.log(JSON.stringify(data));
        }));
  }

  telCC:any=[];
  ccTel:string;
  TelCC:any;
  getCC(i:number){
   
    this.TelCC=(this.ccTel.split('-',1))[0];
    console.log("CC "+this.TelCC);
    this.affecters();
     
  }
  constructor(private modalService: BsModalService,public affectationService:AffectationService) { }
 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
  index:any;
  id:number;
  demandeListe:any=[];
  demander(){
    this.index=this.contentArray.length;
   for(let i = 0;i< this.contentArray.length;i++){
     if(this.contentArray.length-1==i){
      this.id=this.contentArray[i].id;
      console.log(this.id);
     }  
     console.log(1);
    }
    this.affectationService.demandeClient(localStorage.getItem("token"),this.id).subscribe(data =>{
      this.demandeListe=data['message'];
      for(let d of this.demandeListe){
        this.contentArray.push(d);
      }
     
     // this.returnedArray = this.contentArray.slice(0, 20);
    });
  }

 

 
  ngOnInit() {
    this.demandeListe=[];
    for(let lp of this.returnedArray){
      this.listeClient.push(lp);
    }
    this.affectationService.getClient(localStorage.getItem("token")).subscribe(data =>{
      this.contentArray=data['message'];
      this.returnedArray = this.contentArray.slice(0, 20);
    });
    this.affectationService.getCommerciaux(localStorage.getItem("token")).subscribe(data =>{
      this.listeCC=data['message'];
      console.log(this.listeCC);
    });
  }

}
