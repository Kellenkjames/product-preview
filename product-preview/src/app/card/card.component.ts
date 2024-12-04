import { Component, Input } from '@angular/core';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { Product } from '../product/model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImageDisplayComponent, ProductInfoComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: Product;
}
