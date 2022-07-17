/**
 * Zadanie 6
 *
 * Papier, kamień, nożyce.
 * Zaimplementować funkcję, która przyjmuje wybrane pozycje 2 graczy.
 * Zwraca informację, który gracz wygrał.
 *
 * Przykłady:
 * pkn('papier', 'papier') --> 'Remis!'
 * pkn('papier', 'nozyce') --> 'Gracz 2 wygrał!'
 */
console.log('Zadanie 6');
type testType = 'papier' | 'kamien' | 'nozyce'; 
function pkn(playerOne: string, playerTwo: string): string {
  const paper = 'papier';
  const scissors = 'nozyce';
  const stone = 'kamien';
  const playerOneWon = 'Gracz 1 wygrał!';
  const playerTwoWon = 'Gracz 2 wygrał!';
  const draw = 'Remis!';
  const invalidInput = 'invalid input';
  if (isDraw(playerOne, playerTwo)) {
    return draw;
  } else if (playerOne === paper) {
    switch (playerTwo) {
      case scissors:
        return playerOneWon;
      case stone:
        return playerTwoWon;
      default:
        return invalidInput;
    }
  } else if (playerOne === stone) {
    switch (playerTwo) {
      case scissors:
        return playerOneWon;
      case paper:
        return playerTwoWon;
      default:
        return invalidInput;
    }
  } else if (playerOne === scissors) {
    switch (playerTwo) {
      case stone:
        return playerTwoWon;
      case paper:
        return playerOneWon;
      default:
        return invalidInput;
    }
  }
  return invalidInput;
}

function isDraw(firstValue, secondValue): boolean {
  return firstValue === secondValue;
}

// function isValid(value)

console.log(pkn('papier', 'papier'));
console.log(pkn('papier', 'nozyce'));
