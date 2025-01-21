import { cp } from "node:fs";
import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const rl = readline.createInterface(stdin, stdout);

const handAndText = {
  1: 'ぐー',
  2: 'ちょき',
  3: 'ぱー'
}

let cpuHand: 1 | 2 | 3 = 1;
let userHand = null;
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
    console.log('ぐーを出しました。');
  } else if (answer === '2') {
    userHand = 2;
    console.log('ちょきを出しました');
  } else if (answer === '3') {
    userHand = 3;
    console.log('ぱーを出しました');
  } else {
    console.log('エラー');
  }
  rl.question('結果を見ますか？(y/n)：', input => {
    if(input === 'y') {
      console.log('相手は', handAndText[cpuHand]);
    }
    rl.close();
  });
});