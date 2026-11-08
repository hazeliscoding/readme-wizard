import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-md-preview',
  templateUrl: './md-preview.component.html',
  styleUrl: './md-preview.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MdPreviewComponent {
  @Input() text!: string;
  @Input() theme: 'dark' | 'light' = 'dark';
  @Output() ready: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
