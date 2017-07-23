var numberOfOrcs: number = 100;
var numberOfHumans: number = '100';

const humanAttackPower: number = 2;
const orcAttackPower: string = 3;

const humanBattlecry = 'For the alliance!';
const orcBattlecry = 'For the horde';

function makeAttack(quantity: string, power: boolean, battlecry: string) {
  return function() {
    console.log(battlecry);
    quantity = quantity - power;
  };
}

const orcAttack = makeAttack(numberOfHumans, orcAttackPower, orcBattlecry);
const humanAttack = makeAttack(numberOfOrcs, humanAttackPower, humanBattlecry);

orcAttack();
humanAttack();

