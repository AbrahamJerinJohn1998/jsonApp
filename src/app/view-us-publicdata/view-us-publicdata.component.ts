import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-us-publicdata',
  templateUrl: './view-us-publicdata.component.html',
  styleUrls: ['./view-us-publicdata.component.css']
})
export class ViewUsPublicdataComponent {
  
  constructor(private api:ApiService)
  {
    api.fetchUsPublicdata().subscribe(
        (response)=>
        {this.data=response}    
    )
  
  }
  data:any=[]
}
