import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrl: './multi-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldComponent {
  @Input()
  fields: string[] = [];

  @Input()
  textarea: boolean = false;

  @Output()
  valueChange = new EventEmitter<string[][]>();

  entries: { id: string; name: string[] }[] = [];

  constructor(private utilsService: UtilsService) {}

  @Input()
  set value(values: any[] | null) {
    if (!values) return;

    this.entries = [];
    values.forEach((value) => {
      console.log(typeof value);
      if (typeof value === 'string') {
        this.entries.push(this.generateFields([value]));
      } else if (typeof value === 'object') {
        this.entries.push(this.generateFields(Object.values(value)));
      }
    });
  }

  addEntry() {
    this.entries.push(this.generateFields());
  }

  generateFields(values: string[] = []) {
    const fields = [];

    for (let i = 0; i < this.fields.length; i++) {
      fields.push(values[i] ?? '');
    }
    return { id: this.utilsService.guid(), name: fields };
  }

  removeEntry(id: string) {
    this.entries = this.entries.filter((e) => e.id !== id);
    this.emitChange();
  }

  emitChange() {
    this.valueChange.emit(this.entries.map((e) => e.name));
  }

  assignValue(value: string, key: number, index: number) {
    this.entries[index].name[key] = value;
    this.emitChange();
  }
}
