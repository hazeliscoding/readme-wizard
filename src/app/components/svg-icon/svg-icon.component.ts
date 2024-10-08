import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input()
  type: IconType | undefined;
}

export type IconType =
  | 'info'
  | 'list'
  | 'github'
  | 'image'
  | 'layers'
  | 'rect-list'
  | 'star'
  | 'user-group'
  | 'user-circle'
  | 'award'
  | 'book'
  | 'adjustment'
  | 'none';
