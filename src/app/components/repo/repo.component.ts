import { Component } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.css',
  standalone: false
})
export class RepoComponent {
  openProjectRepo() {
    window.open('https://github.com/hazeliscoding/readme-wizard', '_blank');
  }
}
