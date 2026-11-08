import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-raw-code-snippet',
  templateUrl: './raw-code-snippet.component.html',
  styleUrl: './raw-code-snippet.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RawCodeSnippetComponent {
  @Input() code: string = '';

  @Output() codeCopied: EventEmitter<string> = new EventEmitter<string>();

  constructor(private utilsService: UtilsService) {}

  copyCode() {
    this.utilsService.copyToClipboard(this.code);
    this.codeCopied.emit(this.code);
  }
}
