import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class HttpDataSerice {
  Product:any;
  refreshNeed:any;
  constructor(private http: HttpClient) { }
  private _refreshNeed$ = new Subject<void>();
  get _refreshNeed(){
    return this._refreshNeed$;
  }
  apiUrl = 'https://task-1-90345-default-rtdb.firebaseio.com/product.json';
  addProduct(productData: any) {
    return this.http.post<any[]>('https://task-1-90345-default-rtdb.firebaseio.com/product.json', productData)
    .pipe(
      tap(()=>{
        this._refreshNeed.next()
      })
    )
    .subscribe((param: any) => {
      console.log(param)
    })
  }

  getproduct() {
    return this.http.get<any[]>('https://task-1-90345-default-rtdb.firebaseio.com/product.json').pipe(map((resp: any) => {
      const myproductArr = [];
      for (let stdId in resp) {
        myproductArr.push({ ...resp[stdId] })
      }
      //console.log(myStdArr);
      return myproductArr
    }))
  }

}





