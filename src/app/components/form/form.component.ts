import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
})
export class FormComponent {
  type = input<'text' | 'password' | 'checkbox'>()
  label = input<string>('')
  placeholder = input<string>('')
}
