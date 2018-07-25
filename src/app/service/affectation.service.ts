import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  private url:string='http://localhost/crmTNTBackend/assignation.php';
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
          let link =this.url+'/superviseur/commerciauxbysup';
          let data = JSON.stringify({token:token});
          let param='param='+data;
          //console.log(param)
          return this.http.post(link,param,{headers:this.header}).pipe(map(
              res => {
                //console.log(res);
                return res;
              }
          ));
      }

      getClient(token:string){
        let link =this.url+'/commerciaux/clientsbycommerciaux';
        let data = JSON.stringify({token:token});
        let param='param='+data;
        //console.log(param)
        return this.http.post(link,param,{headers:this.header}).pipe(map(
            res => {
              //console.log(res);
              return res;
            }
        ));
    }
   }

