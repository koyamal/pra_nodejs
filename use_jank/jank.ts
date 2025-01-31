import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

type HandType = 1 | 2 | 3;

const jadgeJank = (userHand: HandType, cpuHand: number) => {
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

let userHand: HandType = 1;

const getCpuHand = (): HandType => {
  const rand = Math.random();
  if(rand < 0.3) {
    return 1;
  } else if (rand < 0.6) {
    return 2;
  } else {
    return 3;
  }
}

const playJanken = () => {
  rl.question("じゃんけん(1.ぐー、2.ちょき、3.ぱー)：", answer => {
    console.log(answer);
    if(answer === '1') {
      userHand = 1;
    } else if (answer === '2') {
      userHand = 2;
    } else if (answer === '3') {
      userHand = 3;
    } else {
      console.log('1.ぐー、2.ちょき、3.ぱーから選んでください');
      playJanken();
      return;
    }
    console.log(`あなたは${handAndText[userHand]}を出しました`);
    rl.question('結果を見ますか？(y/n)：', input => {
      if(input === 'y') {
        const cpuHand = getCpuHand();
        console.log(`相手は${handAndText[cpuHand]}を出しました`);
        console.log(`結果：${jadgeJank(userHand, cpuHand)}`);
      }
      rl.question('もう一度遊びますか？(y/n)：', input => {
        if(input === 'y') {
          playJanken();
        } else {
          rl.close();
          console.log('bye');
        }
      })
    });
  });
}

playJanken();