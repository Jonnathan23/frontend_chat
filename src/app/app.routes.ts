import { Routes } from '@angular/router';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LogedComponent } from './headers/loged/loged.component';
import { LoginComponent } from './headers/login/login.component';

export const routes: Routes = [
    {path: 'default', component: MainLoginComponent},
    {path: 'chat', component:ChatComponent},
    {path: 'head-loged', component: LogedComponent},
    {path: 'head-login', component: LoginComponent},
    {path: '', redirectTo: 'default', pathMatch:'full'}
];
