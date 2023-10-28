import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public routes = routes;
  public cart: any = [];

  constructor(private DataService: DataService) {
    this.cart = this.DataService.cart;}

  ngOnInit(): void {
  }

}
