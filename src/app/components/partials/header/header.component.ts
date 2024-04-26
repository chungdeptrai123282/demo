import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { User } from '../../../shared/model/User';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService){
    cartService.getCartObservable().subscribe((newCart=>{
      this.cartQuantity=newCart.totalCount;
    }));
    userService.userObervable.subscribe((newUser)=>{
      this.user=newUser;
    })
  }
  ngOnInit(): void {
    
  }
  logout(){
    this.userService.logout();
  };
  get isAuth(){
    return this.user.token;
  }
}
