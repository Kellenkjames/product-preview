import { Component } from '@angular/core';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImageDisplayComponent, ProductInfoComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {}
