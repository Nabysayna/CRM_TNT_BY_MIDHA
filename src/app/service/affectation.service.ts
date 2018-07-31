import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  private url:string='http://192.168.1.167/crmTNTBackend/index.php';
  private header :HttpHeaders;
  constructor(private http:HttpClient) {
   // this.header =new HttpHeaders({'Content-Type':'application/x-www-from-urlencoded'});
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
   }

   affectation(client=[],commerciale:any){
      let link =this.url+'/authenticat/login';
      let data = JSON.stringify({clients:client,commerciales:commerciale});
      let param='param='+data;
      //console.log(param)
      return this.http.post(link,param,{headers:this.header}).pipe(map(
          res => {
             //console.log(res);
             return res;
          }
      ));
   }
   getCommerciaux(token:string){
          let link =this.url+'/comerciaux/comerciaux';
          let data = JSON.stringify({token:token});
          let param='param='+data;
          console.log(param)
          return this.http.post(link,param,{headers:this.header}).pipe(map(
              res => {
                console.log(res);
                return res;
              }
          ));
      }
     // http://localhost/crmTNTBackend/index.php/comerciaux/clients
      getClient(token:string){
        let link =this.url+'/comerciaux/clients';
        let data = JSON.stringify({token:token});
        let param='param='+data;
        //console.log(param)
        return this.http.post(link,param,{headers:this.header}).pipe(map(
            res => {
              console.log(res);
              return res;
            }
        ));
    }
      demandeClient(token:string,id:number){
        let link =this.url+'/comerciaux/clientsbyinterval';
        let data = JSON.stringify({token:token,id:id});
        let param='param='+data;
        //console.log(param)
        return this.http.post(link,param,{headers:this.header}).pipe(map(
            res => {
              console.log(res);
              return res;
            }
        ));
      }

      getEtat(token:string, phone:string){
        let link =this.url+'/utils/etat';
        let data = JSON.stringify({token:token,phone:phone});
        let param='param='+data;
        //console.log(param)
        return this.http.post(link,param,{headers:this.header}).pipe(map(
            res => {
              console.log(res);
              return res;
            }
        ));
        //return 'Naby NDIAYE en cours échéance 02/09/2018';
      }

      finaliser(token:string, phone:string,commentaire:string ,categorie:string){
        let link =this.url+'/utils/etat';
        let data = JSON.stringify({token:token,phone:phone,commentaire:commentaire,categorie:categorie});
        let param='param='+data;
        //console.log(param)
        return "ok";
        //return 'Naby NDIAYE en cours échéance 02/09/2018';
      }
   }

