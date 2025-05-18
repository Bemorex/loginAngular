import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-login-form',
  imports: [ButtonComponent, FormComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {

}
