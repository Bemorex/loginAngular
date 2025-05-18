import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { InfoPanelComponent } from '../../components/info-panel/info-panel.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [InfoPanelComponent, LoginFormComponent],
})
export class LoginComponent {}
