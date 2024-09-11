import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {

}
