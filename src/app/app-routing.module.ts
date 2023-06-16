import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { EditChildComponent } from './children/edit-child/edit-child/edit-child.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user/user.component';
import { GroupComponent } from './home/group/group/group.component';
import { Group } from './model/Group';
import { ActivitiesComponent } from './home/group/group/activities/activities.component';
// import { CreateDialogComponent } from './finance/create-dialog/create-dialog.component';
// import { DeleteDialogComponent } from './finance/delete-dialog/delete-dialog.component';
// import { DugovanjaComponent } from './finance/dugovanja/dugovanja.component';
// import { FinanceComponentComponent } from './finance/finance-component/finance-component.component';
// import { MjesecniTroskoviComponent } from './finance/mjesecni-troskovi/mjesecni-troskovi.component';
// import { CreateBillDialogComponent } from './finance/create-bill-dialog/create-bill-dialog.component';

// const routes: Routes = [
//   {path: 'home', component:HomeComponent },
//   {path: 'evidence', component:EvidenceComponent },
//   {path: 'children', component:ChildrenComponent },
//   {path: 'edit/:id', component:EditChildComponent },
//   {path: 'user', component:UserComponent }, //TODO treba dodati /:id gdje se id prosljedjuje prilikom logovanja, za sada je hardkodovan u komponenti 
//   {path: 'group/:id', component: GroupComponent, data: {group : Group}},
//   {path: 'activity', component: ActivitiesComponent},
//   {path: 'finance', component:FinanceComponentComponent},
//   {path: 'troskovi', component:MjesecniTroskoviComponent},
//   {path: 'dugovanja', component:DugovanjaComponent},
//   {path: 'dialog',component:CreateDialogComponent},
//   {path: 'deleteDialog', component:DeleteDialogComponent},
//   {path: 'createBillDialog', component: CreateBillDialogComponent}
import { EducatorsComponent } from './educators/educators.component';
import { ViewEducatorComponent } from './educators/view-edit-educator/view-educator/view-educator.component';
import { LogInComponent } from './log-in/log-in/log-in.component';
import { DugovanjaComponent } from './finance/dugovanja/dugovanja.component';
import { FinanceComponentComponent } from './finance/finance-component/finance-component.component';
import { MjesecniTroskoviComponent } from './finance/mjesecni-troskovi/mjesecni-troskovi.component';
// import { CreateDialogComponent } from './finance/create-dialog/create-dialog.component';
// import { DeleteDialogComponent } from './finance/delete-dialog/delete-dialog.component';
// import { DugovanjaComponent } from './finance/dugovanja/dugovanja.component';
// import { FinanceComponentComponent } from './finance/finance-component/finance-component.component';
// import { MjesecniTroskoviComponent } from './finance/mjesecni-troskovi/mjesecni-troskovi.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LogInComponent },

  { path: 'groups', component: HomeComponent },
  { path: 'groups/:id', component: GroupComponent, data: {group : Group} },
  { path: 'groups/:id/activities', component: ActivitiesComponent },

  { path: 'children', component: ChildrenComponent },
  { path: 'children/:id', component: EditChildComponent },

  { path: 'educators' , component: EducatorsComponent },
  { path: 'educators/:id', component: ViewEducatorComponent },

  
  {path: 'finance', component:FinanceComponentComponent},
  {path: 'troskovi', component:MjesecniTroskoviComponent},
  {path: 'dugovanja', component:DugovanjaComponent},

  { path: 'evidence', component: EvidenceComponent },

  { path: 'account-information', component: UserComponent },

  { path: '**', redirectTo: '/groups', pathMatch: 'full' }

//   {path: 'dialog',component:CreateDialogComponent},
//   {path: 'deleteDialog', component:DeleteDialogComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
