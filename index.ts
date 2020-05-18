import { from } from 'rxjs'
import { scan } from 'rxjs/operators';

interface Fruit {
  name: string,
  icon: string
}
const fruit1: Fruit = {
   name: 'apple',
   icon: '🍎'
}
const fruit2: Fruit = {
   name: 'strawberry',
   icon: '🍓'
}
const fruit3: Fruit = {
   name: 'banana',
   icon: '🍌'
}
  
const fruitSource$ = from([fruit1, fruit2, fruit3]);
const fruitResult$ = fruitSource$.pipe(
   scan((acc, fruit: Fruit) => 
     ({ 
       ...acc,
       [fruit.name]: fruit
     })
   , {} as {[name: string]: Fruit})
);
fruitResult$.subscribe({
    next(fruits) {console.log('Fruits', fruits)}
});