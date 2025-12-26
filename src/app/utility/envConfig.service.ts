import { Injectable } from "@angular/core";
import { CommonService } from "../common.service";

@Injectable()
export class EnvConfigService {

  public config: any;
  constructor(private commonService:CommonService){}

   initEnvConfig(){
    return new Promise<void>((resolve,reject)=>{
      var that = this;
      fetch('assets/products.json').then(function (response) {
          response.json().then((res:any)=>{
            that.commonService.setProducts(res);
            resolve();
          });
          })
    })
  }

}
