import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const rl = readline.createInterface(stdin, stdout);

const handAndText = {
  0: 'ぐー',
  1: 'ちょき',
  2: 'ぱー'
}

let cpuHand = null;
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
      console.log('相手は', cpuHand);
    }
    rl.close();
  });
});