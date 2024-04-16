import { Component } from '@angular/core';
import { Cart } from '../../../shared/model/Cart';
import { CartService } from '../../../service/cart.service';
import { CartItem } from '../../../shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
    margin!:'1.5rem 0 0 2.5rem';
    cart!:Cart;
    constructor(private cartService:CartService){
        this.cartService.getCartObservable().subscribe((cart)=>{
          this.cart=cart
        })
    }
    removeFromCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.food.id)
    }
    changeQuantity(cartItem:CartItem,quantityInString:string){
      const quantity=parseInt(quantityInString);
      this.cartService.changgeQuantity(cartItem.food.id,quantity);
    }
}
