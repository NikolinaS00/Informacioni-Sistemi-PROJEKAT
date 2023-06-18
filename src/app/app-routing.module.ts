import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { EditChildComponent } from './children/edit-child/edit-child/edit-child.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user/user.component';
import { GroupComponent } from './home/group/group/group.component';
import { ActivitiesComponent } from './home/group/group/activities/activities.component';
import { FinanceComponentComponent } from './finance/finance-component/finance-component.component';
import { MjesecniTroskoviComponent } from './finance/mjesecni-troskovi/mjesecni-troskovi.component';
import { EducatorsComponent } from './educators/educators.component';
import { ViewEducatorComponent } from './educators/view-edit-educator/view-educator/view-educator.component';
import { LogInComponent } from './log-in/log-in/log-in.component';
import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowKindergartenInfoComponent } from './show-kindergarten-info/show-kindergarten-info.component';
import { MembershipComponent } from './finance/membership/membership.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LogInComponent },

  { path: 'unauthorized', component: PageNotFoundComponent },

  { path: 'groups', component: HomeComponent },
  { path: 'groups/:id', component: GroupComponent },
  { path: 'groups/:id/activities', component: ActivitiesComponent },

  { path: 'children', component: ChildrenComponent },
  { path: 'children/:id', component: EditChildComponent },

  { path: 'educators', component: EducatorsComponent, canActivate:[AuthGuardService] },  //Rute kojima nije dozvoljen neautorizovan pristup
  { path: 'educators/:id', component: ViewEducatorComponent, canActivate:[AuthGuardService] },

  { path: 'finance', component: FinanceComponentComponent, canActivate:[AuthGuardService] },
  { path: 'costs', component: MjesecniTroskoviComponent, canActivate:[AuthGuardService] },
  { path: 'memberships', component: MembershipComponent, canActivate:[AuthGuardService] },

  { path: 'evidence', component: EvidenceComponent },

  { path: 'info', component: ShowKindergartenInfoComponent },

  { path: 'account-information', component: UserComponent },

  { path: '**', redirectTo: '/groups', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }