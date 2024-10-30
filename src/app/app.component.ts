import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLoginComponent } from "./pages/main-login/main-login.component";
import { HeadersComponent } from "./headers/headers.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLoginComponent, HeadersComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat';
}
