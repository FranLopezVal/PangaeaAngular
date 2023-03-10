import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path:'detail',
    component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
//   declarations: [
//     UserListComponent,
//     UserDetailComponent
//   ]
})
export class UserRoutingModule { }
