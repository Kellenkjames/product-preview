import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  standalone: true,
  imports: [],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss',
})
export class ImageDisplayComponent {
  @Input() desktopImageUrl!: string;
  @Input() mobileImageUrl!: string;
}
