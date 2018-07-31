import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  private url:string='http://192.168.1.167/crmTNTBackend/index.php';
  private header :HttpHeaders;
  constructor(private http:HttpClient) {
   // this.header =new HttpHeaders({'Content-Type':'application/x-www-from-urlencoded'});
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
   }

   login(login:string,password:string){
      let link =this.url+'/authenticat/login';
      let data = JSON.stringify({login:login,pwd:password});
      let param='param='+data;
      console.log(param)
      return this.http.post(link,param,{headers:this.header}).pipe(map(
          res => {
             console.log(res);
             return res;
          }
      ));
   }
}
