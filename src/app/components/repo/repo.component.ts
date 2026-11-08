import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RepoComponent {
  openProjectRepo() {
    window.open('https://github.com/hazeliscoding/readme-wizard', '_blank');
  }
}
