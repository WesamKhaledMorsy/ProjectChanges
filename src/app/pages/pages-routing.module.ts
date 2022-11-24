import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DefaultComponent } from './dashboards/default/default.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';

const routes: Routes = [
// { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'filemanager', component: FilemanagerComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },

  {path:'round',loadChildren:()=> import('./round/round.module').then(m=>m.RoundModule)},
  {path:'track',loadChildren:()=> import('./track/track.module').then(m=>m.TrackModule)},
  {path:'grade',loadChildren:()=> import('./grade/grade.module').then(m=>m.GradeModule)},
  {path:'gender',loadChildren:()=> import('./gender/gender.module').then(m=>m.GenderModule)},
  {path:'university',loadChildren:()=> import('./university/university.module').then(m=>m.UniversityModule)},
  {path:'status',loadChildren:()=> import('./status/status.module').then(m=>m.StatusModule)},
  {path:'document',loadChildren:()=> import('./documents/documents.module').then(m=>m.DocumentsModule)},
  {path:'student',loadChildren:()=> import('./student/student.module').then(m=>m.StudentModule)},
  {path:'interview',loadChildren:()=> import('./interview/interview.module').then(m=>m.InterviewModule)},
  {path:'interviewer',loadChildren:()=> import('./interviewer/interviewer.module').then(m=>m.InterviewerModule)},
  // {path:'addRole',loadChildren:()=> import('./admin-dashboard/')}








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
