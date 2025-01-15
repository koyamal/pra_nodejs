import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const rl = readline.createInterface(stdin, stdout);

const rand = Math.random();

rl.question("じゃんけん(1.ぐー、2.ちょき、3.ぱー)：", answer => {
  console.log(answer);
  if(answer === '1') {
    console.log('ぐーを出しました');
  } else if (answer === '2') {
    console.log('ちょきを出しました');
  } else if (answer === '3') {
    console.log('ぱーを出しました');
  } else {
    console.log('エラー');
  }
});