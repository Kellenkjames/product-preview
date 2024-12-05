import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Product } from './product/model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: Product = {
    desktopImageUrl: 'assets/images/image-product-desktop.jpg',
    mobileImageUrl: 'assets/images/image-product-mobile.jpg',
    type: 'Perfume',
    title: 'Gabrielle Essence Eau De Parfum',
    description:
      'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    newPrice: '$149.99',
    oldPrice: '$169.99',
    cartIcon: 'assets/images/icon-cart.svg',
    cartDesc: 'Add to Cart',
  };
}
