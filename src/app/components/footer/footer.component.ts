import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  openProjectRepo() {
    window.open('https://github.com/hazeliscoding/readme-wizard', '_blank');
  }
}
