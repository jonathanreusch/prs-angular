import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { UserCreateComponent } from './features/user-create/user-create.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { VendorDetailComponent } from './features/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './features/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
