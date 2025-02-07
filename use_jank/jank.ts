import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const rl = readline.createInterface(stdin, stdout);

type HandType = 1 | 2 | 3;

const jadgeJank = (userHand: HandType, cpuHand: HandType) => {
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

const handAndText = {
  1: 'ぐー',
  2: 'ちょき',
  3: 'ぱー'
}

let userHand: HandType = 1;

const getCpuHand = (): HandType => {
  const rand = Math.random();
  if(rand < 0.33) {
    return 1;
  } else if (rand < 0.66) {
    return 2;
  } else {
    return 3;
  }
}

const playJanken = () => {
  rl.question(`じゃんけん(1.${handAndText[1]}、2.${handAndText[2]}、3.${handAndText[3]})：`, answer => {
    if(answer === '1') {
      userHand = 1;
    } else if (answer === '2') {
      userHand = 2;
    } else if (answer === '3') {
      userHand = 3;
    } else if (answer === 'q') {
      console.log('ご利用ありがとうございました。');
      rl.close();
      return;
    } else {
      console.log(`1.${handAndText[1]}、2.${handAndText[2]}、3.${handAndText[3]}から選んでください。やめる場合：q`);
      playJanken();
      return;
    }
    console.log(`あなたは${handAndText[userHand]}を出しました`);
    rl.question('結果を表示します(n: 結果を表示しない)：', input => {
      if(input.toLowerCase() !== 'n') {
        const cpuHand = getCpuHand();
        console.log(`相手は${handAndText[cpuHand]}を出しました`);
        console.log(`結果：${jadgeJank(userHand, cpuHand)}`);
      }
      rl.question('もう一度遊びますか？(y/n)：', input => {
        if(input.toLowerCase() === 'y') {
          playJanken();
        } else {
          rl.close();
          console.log('ご利用ありがとうございました。');
        }
      })
    });
  });
}

playJanken();