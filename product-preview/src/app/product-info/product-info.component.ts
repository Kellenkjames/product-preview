import { Component, Input } from '@angular/core';
import { Product } from '../product/model';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  @Input() product!: Product;
}
