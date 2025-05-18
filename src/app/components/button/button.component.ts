import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  text = input<string>();
  type = input<'submit' | 'button'>('button');
  buttonStyle = input<'primary' | 'secondary' | 'social'>('primary');
  imgSrc = input<string>('');
  isFullWidth = input<boolean>(false);
  isDisabled = input<boolean>(false);
  isUpper = input<boolean>(false);

  getButtonClass() {
    const classes = ['button'];

    if(this.buttonStyle() === 'primary') classes.push('button--primary');
    if(this.buttonStyle() === 'secondary') classes.push('btn-secondary');
    if(this.buttonStyle() === 'social') classes.push('social-button');
    
    if(this.isFullWidth()) classes.push('button--full');
    if(this.isDisabled()) classes.push('button--disabled');
    if(this.isUpper()) classes.push('button--upper');

    return classes.join(' ');
  }
}
