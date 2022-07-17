import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.performAllTasks();
  }

  private performAllTasks(): void {
    this.firstTask();
    this.secondTask();
    this.thirdTask();
    this.forthTask();
    this.fiftTask();
  }

  /*
    Zadanie 1:
    Napisz funkcję, która sprawdzi, czy argument wejściowy jest jedną z liczb "zmodyfikowanego" ciągu Fibonacciego. Wspomniana "modyfikacja" polega na własnym zdefiniowaniu dwóch pierwszych wyrazów ciągu (dla tradycyjnego ciągu Fibonacciego są to 0 i 1).

    Sygnatura:
    isMyFibonacci(firstValue: number, secondValue: number, testValue: number): boolean {}
    
    Założenia:
    firstValue < secondValue
    firstValue i secondValue są liczbami nieujemnymi
    
    Przykład wywołania:
    isMyFibonacci(0, 1, 3); // true
    isMyFibonacci(0, 1, 6) // false
    isMyFibonacci(5, 10, 25) // true
  */

  // 0 <= firstValue < secondValue
  private isMyFibonacci(firstValue: number, secondValue: number, testValue: number): boolean {
    if (testValue === firstValue || testValue === secondValue) return true;
    let currentVal: number = secondValue;
    let previousValue: number;
    while (currentVal < testValue) {
      previousValue = currentVal;
      currentVal = firstValue + secondValue;
      firstValue = secondValue;
      secondValue = previousValue;
      if ( currentVal === testValue ) return true;
    }
    return false;
  }

  private firstTask(): void {
    console.log('Task 1:');
    console.log(this.isMyFibonacci(0, 1, 3), 'should be  true');
    console.log(this.isMyFibonacci(0, 1, 6), 'should be  false');
    console.log(this.isMyFibonacci(5, 10, 25), 'should be  true');
  }
  /*
    Zadanie 2:
      Napisz własną implementację funkcji "reduce" (bez wykorzystania Array.reduce).
      Przykład wywołania:
      reduce([1,2,3], (acc, next) => acc + next, 10); //16
  */
  private reduce<T>(list: T[], func: (a: T, b: T) => T, accumulator: T): T {
    if (list.length) {
      accumulator = func(list[0], accumulator);
    } else {
      return accumulator;
    }
    return this.reduce(list.slice(1), func, accumulator);
  }
  private secondTask(): void {
    console.log('Task 2:');
    console.log(this.reduce([1,2,3], (acc, next) => acc + next, 10), 'should be  16');
  }
  /*
    Zadanie 3:
      Jaki będzie wynikowy obiekt po wywołaniu poniższych funkcji i dlaczego?
        const myObj: any = { a: 'initialValue' };

        function alterObj(obj) { obj.a = ’aDwa’ }
        function alterObj2(obj) { obj = {a: ‘aTrzy’ } }

        alterObj(myObj) // ?
        alterObj2(myObj); // ?
  */
  private alterObj (obj: { a: any; }) { 
    obj.a = 'aDwa' 
  }

  private alterObj2 (obj: { a: any; }) { 
    obj = {a: 'aTrzy' } 
  }

  private thirdTask(): void {
    console.log('Task 3:');
    const myObj: any = { a: 'initialValue' };
    this.alterObj(myObj);
    this.alterObj2(myObj);
    console.log(myObj, `should be { a: 'aDwa'}`);
  }

  /* Zadanie 4
    let guy = {
      greeting: “Hi”,
      friends: ["John", "Pete", "Alice"],
      welcomeFriends() {
          this.friends.forEach(friend => alert(this.greeting + ': ' + friend) );
      },
      welcomeFriends2() {
          this.friends.forEach(function (friend) {
            alert(this.greeting + ': ' + friend)
            } );
        }
    }
    guy.welcomeFriends();
    guy.welcomeFriends2();

    Dlaczego rezultat wywołania welcomeFriends i welcomeFriends2 jest różny?
  */
    private forthTask(): void {
      console.log('Task 4:');
      console.log(`Rezultat jest różny, ponieważ w pętlach forEach użyto różnego rodzaju funkcji.
       W przypadku funkcji strzałkowej słowo kluczowe 'this' jest słowem kluczowym rodzica tej funkcji 
       (z miejsca, z którego została wywołana). Regularna funkcja ma swoje słowo kluczowe 'this',
       w którego zawartości nie została zdefiniowana zmienna greeting, a więc dla tej funkcji jest ona 'undefined'.`);
    }

    /*
    Zadanie 5:
    Przeprowadź code review (wskaż błędy i potencjalne usprawnienia) poniższego kodu. Kod na obrazku i 
    wklejony poniżej jest taki sam. Zakładamy, że CustomerInfoService zawiera metody, które wołamy w komponencie

      import { Component, Input } from '@angular/core';
      import moment from 'moment';
      import { CustomerInfoService } from "./services";

      @Component({
        selector: 'my-app',
        template: `<h1>Customer latest activity date
        {{ formatDate(latestActivityDate) }}</h1>`,
        styleUrls: ['./app.component.css'],
      })
      export class AppComponent {
        latestActivityDate: string;
        @Input() a: boolean; // id użytkownika
        constructor(private customerInfoService: CustomerInfoService) {
          customerInfoService.getCustomerIPById().subscribe((x) => {
            customerInfoService.getIPActivityDates(x).subscribe((y) => {
              this.latestActivityDate = y.latestDate;
            })
          })
        }

        private formatDate(dateString: string): string {
          return moment(dateString).format('HH:m:s');
        }
      }
    */
      private fiftTask(): void {
        console.log('Task 5:');
        console.log(`
        1. Dobrą praktyką jest wydzielenie template do osobnego pliku .html
        2. Dobrze by było porządnie nazwać zmienną, 'a' nic nie mówi o tym co robi ta zmienna. 
        3. Komentarz 'id użytkownika' jest zbędny - to nazwa zmiennej powinna mówić czym jest.
        4. Nie subskrybujemy się w konstruktorze, jest od tego funkcja ngOnInit z interface'u OnInit
        5. Nie stosujemy zagnieżdżonych subskrybcji! Może powodować to wyciek pamięci. Lepszym rozwiązaniem jest zastosowanie Pipe'ów.
        6. Nie zostawiamy nieużywanego kodu - funkcja formatDate nie została użyta. Należy ją usunąć.`);
      }
}
