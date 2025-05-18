import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [InfoPanelComponent],
})
export class AppComponent {
  title = 'login';
}
