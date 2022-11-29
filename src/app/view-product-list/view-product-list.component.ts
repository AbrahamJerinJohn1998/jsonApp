import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent {

  constructor(private api:ApiService)
  {
    api.fetchProductlist().subscribe(
        (response)=>
        {this.data=response}    
    )
  
  }
  data:any=[]
}
