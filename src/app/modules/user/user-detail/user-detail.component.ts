import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent {

  

  onSubmit(f:any)
  {
    console.log(f.value);
  }
}
