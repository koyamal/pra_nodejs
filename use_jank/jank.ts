import { cp } from "node:fs";
import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const jadgeJank = (userHand: number, cpuHand: number) => {
  switch(userHand) {
    case 1:
      switch(cpuHand) {
        case 1:
          return 'あいこ';
        case 2:
          return 'かち';
        case 3:
          return 'まけ';
        default:
          return 'エラー';
      }
    case 2:
      switch(cpuHand) {
        case 1:
          return 'まけ';
        case 2:
          return 'あいこ';
        case 3:
          return 'かち';
        default:
          return 'エラー';
      }
    case 3:
      switch(cpuHand) {
        case 1:
          return 'かち';
        case 2:
          return 'まけ';
        case 3:
          return 'あいこ';
        default:
          return 'エラー';
      }
    default:
      return 'エラー';
  }
}

const rl = readline.createInterface(stdin, stdout);

const handAndText = {
  1: 'ぐー',
  2: 'ちょき',
  3: 'ぱー'
}

let cpuHand: 1 | 2 | 3 = 1;
let userHand: 1 | 2 | 3 = 1;
const rand = Math.random();
if(rand < 0.3) {
  cpuHand = 1;
} else if (rand < 0.6) {
  cpuHand = 2;
} else {
  cpuHand = 3;
}

rl.question("じゃんけん(1.ぐー、2.ちょき、3.ぱー)：", answer => {
  console.log(answer);
  if(answer === '1') {
    userHand = 1;
  } else if (answer === '2') {
    userHand = 2;
  } else if (answer === '3') {
    userHand = 3;
  } else {
    console.log('エラー');
    rl.close();
    return;
  }
  console.log(`あなたは${handAndText[userHand]}を出しました`);
  rl.question('結果を見ますか？(y/n)：', input => {
    if(input === 'y') {
      console.log(`相手は${handAndText[cpuHand]}を出しました`);
      console.log(jadgeJank(userHand, cpuHand));
    }
    rl.close();
  });
});