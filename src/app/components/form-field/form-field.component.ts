import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input()
  disabled = false;

  @Input()
  placeholder = '';

  @Input()
  textarea = false;

  @Output()
  change = new EventEmitter<Event>();

  @Input() value: string | null | undefined = null;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  inputChange(e: Event) {
    e.stopPropagation();
    e.preventDefault();

    this.change.emit(e);
    this.valueChange.emit((e.target as HTMLInputElement).value);
  }
}
