import { Component } from '@angular/core';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LoginComponent],
})
export class AppComponent {
  title = 'login';
}
