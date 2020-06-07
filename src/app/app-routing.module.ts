import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NewsComponent } from './news/news.component';
import { AdminGuard } from './admin.guard';
import { ComplaintsComponent } from './complaints/complaints.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'reservations', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AdminGuard] },
  { path: 'complaints', component: ComplaintsComponent, canActivate: [AuthGuard] },
  { path: 'nav', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
