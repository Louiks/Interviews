// Zaimplementuj klasę PaginationHelper. Jest to klasa pomocnicza, do uzyskiwania informacji związanych z paginacją kolekcji.

// Klasa powinna być zaprojektowana tak, aby przyjmować tablicę wartości i liczbę całkowitą wskazującą, ile elementów będzie dozwolonych na każdej stronie. Typy wartości zawarte w kolekcji / tablicy nie są istotne.
// Klasa za pomocą metod powinna pozwolić uzyskać następujące informację:
// - jaka jest liczba stron
// - ile jest łącznie elementów w kolekcji
// - ile jest elementów na danej stronie. Jeżeli wskazana strona nie istnieje zwracamy -1;
// - wskazać na, której stronie znajduje się element o podanym indeksie. Jeżeli, nie ma żadnego elementu na wskazanym indeksie zwracamy -1;

console.log('test');

class PaginationHelper {
  constructor(private values: any[], private availableNumber: number) {}

  // - jaka jest liczba stron
  public getNumberOfPages(): number {
    return Math.ceil(this.values.length / this.availableNumber);
  }

  // - ile jest łącznie elementów w kolekcji
  public getElementsNumber(): number {
    return this.values.length;
  }

  // - ile jest elementów na danej stronie. Jeżeli wskazana strona nie istnieje zwracamy -1;
  public getNumberOfElementsAtGivenPage(page: number): number {
    const elementsNumber = this.getNumberOfPages();
    if (page > elementsNumber) {
      return -1;
    } else if (page === elementsNumber) {
      return this.getElementsNumberAtLastPage();
    }
    return this.availableNumber;
  }

  private getElementsNumberAtLastPage(): number {
    return this.values.length % this.availableNumber;
  }

  // - wskazać na, której stronie znajduje się element o podanym indeksie. Jeżeli, nie ma żadnego elementu na wskazanym indeksie zwracamy -1
  public getPageOfElementWithGivenIndex(index: number): number {
    return index < this.values.length && index >= 0
      ? Math.floor(index / this.availableNumber) + 1
      : -1;
  }
}

const test = new PaginationHelper(
  [{ a: 'te', b: 'asd' }, 1, 'dea', 1, 3, 4, 5],
  2
);
const page3 = 3;
const page4 = 4;
const index = 5;
console.log();
console.log('Number of pages: ', test.getNumberOfPages());
console.log('Number of elements: ', test.getElementsNumber());
console.log(
  'Elements at page',
  page3,
  test.getNumberOfElementsAtGivenPage(page3)
);
console.log(
  'Elements at page',
  page4,
  test.getNumberOfElementsAtGivenPage(page4)
);
console.log(
  'Elements at page',
  index,
  test.getNumberOfElementsAtGivenPage(index)
);
console.log(
  'Page of element with index: ',
  index,
  test.getPageOfElementWithGivenIndex(index)
);
console.log(
  'Page of element with index: ',
  0,
  test.getPageOfElementWithGivenIndex(0)
);
