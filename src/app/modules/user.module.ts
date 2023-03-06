import { SharedModule } from "@shared/shared.module";
import { NgModule } from '@angular/core';
import { UserRoutingModule } from "./user.routing.module";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        UserDetailComponent,
        UserListComponent
    ],
    imports:[
        FormsModule,
        SharedModule,
        UserRoutingModule
    ]
})

export class UserModule 
{}