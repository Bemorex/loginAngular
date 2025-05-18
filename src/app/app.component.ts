import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [InfoPanelComponent, LoginFormComponent],
})
export class AppComponent {
  title = 'login';
}
