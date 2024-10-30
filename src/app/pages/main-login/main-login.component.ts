import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserChat } from '../../../assets/models/models';
import { default_user } from '../../../assets/data/data';

@Component({
  selector: 'app-main-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent {

  users:UserChat[] = [...default_user]

  login(){

  }

}
