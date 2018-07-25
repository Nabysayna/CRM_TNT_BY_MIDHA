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
 
  Commerciale = [
    {prenom:'awa', nom:'FALL',tel:'779632587',clients:[{prenom:'',nom:'', tel:'',commentaire:''}]},
    {prenom:'Aby', nom:'Sy',tel:'779232587',clients:[]},
    {prenom:'Anta', nom:'Gueye',tel:'779699587',clients:[]},
    {prenom:'Coumba',nom:'Diouf',tel:'779632587',clients:[]}
  ]
  Abonner = [
    {prenom:'Amadou',nom:'Ba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1,cocher:0},
    {prenom:'Fatou',nom:'Diop', tel:'779654263',commentaire:'gvhvhbjh ibhjb', etat:2,cocher:0},
    {prenom:'Adama',nom:'fall', tel:'779866263',commentaire:'gvhvhbjh ibhjb', etat:3,cocher:0},
    {prenom:'Issa',nom:'Tamba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1,cocher:0},
    {prenom:'Samba',nom:'Sow', tel:'779888263',commentaire:'gvhvhbjh ibhjb', etat:2,cocher:0},
    {prenom:'Ndeye',nom:'Gueye', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1,cocher:0},
    {prenom:'Anta',nom:'Niang', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:2,cocher:0},
    {prenom:'Fallou',nom:'Fall', tel:'779121426',commentaire:'gvhvhbjh ibhjb', etat:1,cocher:0},
    {prenom:'Awa',nom:'Diouf', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:3,cocher:0},
    {prenom:'Youssou',nom:'Ba', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:3,cocher:0},
    {prenom:'Ablaye',nom:'Barry', tel:'779854263',commentaire:'gvhvhbjh ibhjb', etat:1,cocher:0}
  ]
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  porte(){
      this.liste=1;
      this.port=1;
      this.affect=0;
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
      this.Abonner[i].cocher=1;
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
  affecter(i :number,id:number){
    //this.coche();
    if(this.chck==1){
      let obj = {prenom:this.listeClient[i].prenom,nom:this.listeClient[i].nom, tel:this.listeClient[i].tel,commentaire:this.listeClient[i].commentaire, etat:this.listeClient[i].etat}
      this.Abonner.splice(i,1); 
      this.affectationList.push(obj);
      this.affectationService.affectation(this.affectationList,this.Commerciale[id]);
     // alert(this.affectationList+" "+this.Commerciale[id]);
    }else{
      this.modalRef.hide();
      //alert("Coché d'abord");
    }
   this.chck=0;
    for(let l of this.affectationList)
    console.log(l.prenom+" "+l.nom+" "+this.Commerciale[id]);
  }
  affecters(){
    for(let a of this.Abonner){
      if(a.cocher==1){
        this.affectationList.push(a);
      }
    }
    for(let l of this.affectationList)
     console.log(l.prenom+" "+l.nom);
  }

  comment(i:number){
   
    for(let a of this.Commerciale){
      a.clients=this.listeClient;
      alert(a.nom);
      for(let c of a.clients){
        alert(a.prenom+" "+a.nom);
      }
    }
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
    for(let lp of this.Abonner){
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
