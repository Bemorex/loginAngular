import { Component } from '@angular/core';
import { InfoPanelComponent } from '../../components/info-panel/info-panel.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, InfoPanelComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}
