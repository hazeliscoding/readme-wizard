import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-md-preview',
  templateUrl: './md-preview.component.html',
  styleUrl: './md-preview.component.css',
})
export class MdPreviewComponent {
  @Input() text!: string;
  @Input() theme: 'dark' | 'light' = 'dark';
  @Output() ready: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
