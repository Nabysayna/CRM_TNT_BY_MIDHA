import { Component, OnInit } from '@angular/core';
import { AutentificationService} from '../service/autentification.service';
import { Router } from '@angular/router';
import { CrmTntComponent } from '../crm-tnt/crm-tnt.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  user:string=null;
  isLogged:any;
  login:string;
  password:string;
  Error:number=0;
  onConnect(){
    this.loginService.login(this.login, this.password).subscribe(data =>{
      this.isLogged =data;
      console.log(data);
        if(this.isLogged['codeerror']==true){
          if(this.isLogged['message'].accesslevel==5){
            this.Error=0;
            this.user=this.isLogged['message'].prenom;  
            alert(this.user);
            this.router.navigate(['/commerciale']);
           //alert("ok");
          }else if(this.isLogged['message'].accesslevel==4){
            this.Error=0;
            //alert(this.isLogged['message'].basetoken)
            this.router.navigate(['/supervideur']);
          }else{
            alert("Vous ne pouvais pas accéder à cette page");
          }
         
         
        }else{
          this.Error=1;
        }
    });
  }
  constructor(public loginService:AutentificationService,private router: Router) { }

  ngOnInit() {
  
  }

}
