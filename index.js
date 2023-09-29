const win = 200;
const lose = 5;

function winningBalance(win, lose) {
  let result = win - lose;
  return result;
}

const points = winningBalance(win, lose);
console.log(`O Herói teve ${win} Vitórias e ${lose} Derrotas , somando no total ${points} pontos`);

function patents(totalPoints) {
  let yourPatent = "";
  if (totalPoints <= 10) {
    yourPatent = "Iron";
  } else if (totalPoints >= 11 && totalPoints <= 20) {
    yourPatent = "Bronze";
  } else if (totalPoints >= 21 && totalPoints <= 50) {
    yourPatent = "Silver";
  } else if (totalPoints >= 51 && totalPoints <= 80) {
    yourPatent = "Gold";
  } else if (totalPoints >= 81 && totalPoints <= 90) {
    yourPatent = "Diamond";
  } else if (totalPoints >= 91 && totalPoints <= 100) {
    yourPatent = "Legendary";
  } else if (totalPoints >= 101) {
    yourPatent = "Immortal";
  }

  return yourPatent;
}

const level = patents(points);

console.log(`O Herói tem de saldo de ${points} pontos está no nível de ${level}`);
