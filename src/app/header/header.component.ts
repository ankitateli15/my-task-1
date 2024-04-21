import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { HttpDataSerice } from '../service/http-data.service';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navigationUrlToAbout : string = 'header';
  getproduct: undefined | any[]
  product: any[] = [];
  item: any;
  productList: any[] = [];
  tableBag : any[]=[]

  constructor(public dialog: MatDialog, private httpServ: HttpDataSerice) { }
  openBuyNowDialog() {
    this.dialog.open(DialogComponent,{
      width : '100%'
    })
  }



  ngOnInit(): void {
    this.getAllProduct();
    this.httpServ._refreshNeed.subscribe(()=>{
      this.getAllProduct()
    })

  };
  getAllProduct() {
    this.httpServ.getproduct().subscribe({
      next: (param: any) => {
        console.log(param)
        this.product = param
        this.product.forEach((a: any) => {
          Object.assign(a, {
            quantity: 1,
            total: a.price
          })
        })
      }
    })

  }
  addToBag(item: any) {
    // this.productList.push(item)
    // console.log(item);
    let flag = false;
    for(let i of this.tableBag){
      if(i++){
        i.quantityProd = item.quantityProd * item.price
        i.quantityProd =item.quantityProd
        flag = true
      }
    }
    if(!flag){
      this.dataSendToBag(item)
    }
  }
  dataSendToBag(data:any){
    let newData =  Object.assign({},data)
    this.productList.push(newData)
  }



  quantity: number = 1;

  increaseQuantity(item: { quantity: any; }) {
    if (item.quantity != Infinity) {
      item.quantity++;
    }
    // item.quantity++
  }

  decreaseQuantity(item: { quantity: any; }) {
    if (item.quantity != 1) {
      item.quantity -= 1
    }
    // if( item.quantity>0){
    //  item.quantity = item.quantity-1
    // }
  }



  onDelete(element: any) {
    this.productList.forEach((value, index) => {
      if (value == element) {
        this.productList.splice(index, 1)
        this.calculateAmount()
      }
    })
  }

  calculateAmount(): number {
    // return this.quantity * this.item.price;
    return this.productList.reduce((total,item)=>total + item.quantity *item.price,0)

  }

}


