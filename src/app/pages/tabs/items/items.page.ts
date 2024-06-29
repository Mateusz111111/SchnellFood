import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  restaurants: any[] = [
    {
      uid: '111',
      cover: 'assets/imgs/kebab.webp',
      name: 'BafraKebab',
      nameLowercase: 'bafrakebab',
      description: 'Cierpliwy to i kebab ugotuje',
      cuisines: [
        'turkish'
      ],
      rating: 3.5,
      delivery_time: 25,
      distance: 2.5,
      price: 29
    },
    {
      uid: '100',
      cover: 'assets/imgs/pizza.jpg',
      name: 'Pizzeria',
      nameLowercase: 'pizzeria',
      description: 'Pizza włoska',
      cuisines: [
        'italian'
      ],
      rating: 3.5,
      delivery_time: 25,
      distance: 2.5,
      price: 29
    },
    {
      uid: '101',
      cover: 'assets/imgs/schabowy.jpg',
      name: 'Polska Restauracja',
      nameLowercase: 'polska restauracja',
      description: 'Klasyczny polski obiad',
      cuisines: [
        'polish'
      ],
      rating: 3.5,
      delivery_time: 25,
      distance: 2.5,
      price: 29
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
