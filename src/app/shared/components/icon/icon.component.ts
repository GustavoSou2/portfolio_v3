import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type IconStyleType = 'regular' | 'solid' | 'light' | 'brands';

type IconType = 'outline' | 'default';

type LabelPositionType = 'left' | 'right';

type ThemeType = 'dark' | 'light';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  private _icon!: string;
  @Input() set icon(icon: string) {
    this._icon = `fa-${icon}`;
  }
  get icon() {
    return this._icon;
  }

  _iconStyle: IconStyleType = <IconStyleType>'fa-regular';
  @Input() set iconStyle(iconStyle: IconStyleType) {
    this._iconStyle = <IconStyleType>`fa-${iconStyle || 'regular'}`;
  }

  get iconStyle() {
    return this._iconStyle;
  }

  @Input() type: IconType = 'default';

  _rounded: string = '8px';
  @Input() set rounded(rounded: string) {
    this._rounded = rounded;
  }

  get rounded() {
    return this._rounded;
  }

  @Input() label!: string;

  @Input() labelPosition: LabelPositionType = 'right';

  @Input() svg!: string;

  @Input() theme: ThemeType = 'dark';
}
