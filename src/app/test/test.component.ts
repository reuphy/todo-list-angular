import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter, forkJoin, map, of, tap } from 'rxjs';

interface User {
  name: string;
  age: number;
  active: boolean;
}

interface Product {
  name: string;
  type: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  users: User[] = [
    { name: 'Bruce', age: 30, active: true },
    { name: 'Peter', age: 45, active: true },
  ]

  products = [
    { name: 'banana', type: '1', quantity: 200, price: 1 },
    { name: 'carrot', type: '2', quantity: 50, price: 2 },
    { name: 'potato', type: '2', quantity: 20, price: 3 },
    { name: 'apple', type: '1', quantity: 10, price: 4 },
    { name: 'orange', type: '1', quantity: 5, price: 5 },
    { name: 'apple', type: '1', quantity: 5, price: 5 },
  ];

  productsCategories = [
    { id: 1, name: 'fruit', products: [] },
    { id: 2, name: 'vegetable', products: [] },
  ];

  ngOnInit(): void {
    // this.toNamesArray(this.users)

    // this.activeUsers(this.users)

    // this.multiplyPriceTimesTwo()

    // this.combineObservablesToMapIdToAstring()

    this.filterFruits()

  }

  toNamesArray() {
    const users$ = of(this.users)

    users$
      .pipe(map((users: User[]) => users.map((user: User) => user.name)))
      .pipe(tap((names) => console.log(names)))

    users$.subscribe((users: User[]) => console.log(users))
  }

  activeUsers() {
    const users$ = of(this.users)

    users$.pipe(filter((users: any) => users.every((user: User) => user.active)))

    users$.subscribe((users: User[]) => console.log(users))
  }

  multiplyPriceTimesTwo() {
    const products$ = of(this.products)

    products$.pipe(map(products => products.map(product => ({ ...product, price: product.price * 2 }))))

    products$.subscribe((products: Product[]) => console.log(products))
  }

  combineObservablesToMapIdToAstring() {
    // combine this
    // products = [{ name: 'banana', type: '1', quantity: 200, price: 1 }];
    // and this
    // productsCategories = [{ id: 1, name: 'fruit', products: [] }];
    // into this
    //[{ name: 'banana', type: 'fruit', quantity: 200, price: 1 }];

    const products$ = of(this.products)
    const productsCategories$ = of(this.productsCategories)
    const productsWithCategories$ = forkJoin([products$, productsCategories$])

    productsWithCategories$
      .pipe(
        map(([products, productsCategories]) => {
          return products.map(product => {
            const category = productsCategories.find(category => category.id === +product.type)
            return { ...product, type: category?.name }
          })
        })
      )

    productsWithCategories$
      .subscribe(productsWithCategories => console.log(productsWithCategories))


  }

  filterFruits() {
    const selectedProducts = '1';
    const fruits$ = of(this.products)
      .pipe(map(products => products.filter(item => item.type === selectedProducts)))

    fruits$
      .subscribe(item => console.log(item))
  }

  test() {
    // https://app.pluralsight.com/course-player?clipId=bd538b41-beb7-4dca-aacb-74fca1df27d5
    // what is a subject
    // Speacial type of observable because It is both an Observable and an Observer.
    // we can call it's next method to emit new values/notifications to subscribers
  }
}
