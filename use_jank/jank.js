"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const readline = __importStar(require("node:readline"));
const rl = readline.createInterface(node_process_1.stdin, node_process_1.stdout);
let cpuHand = null;
let userHand = null;
const rand = Math.random();
if (rand < 0.3) {
    cpuHand = 0;
}
else if (rand < 0.6) {
    cpuHand = 1;
}
else {
    cpuHand = 2;
}
rl.on('line', (input) => {
    console.log(`入力内容: ${input}`);
});
// rl.question("じゃんけん(1.ぐー、2.ちょき、3.ぱー)：", answer => {
//   console.log(answer);
//   if(answer === '1') {
//     userHand = 1;
//     console.log('ぐーを出しました。');
//   } else if (answer === '2') {
//     userHand = 2;
//     console.log('ちょきを出しました');
//   } else if (answer === '3') {
//     userHand = 3;
//     console.log('ぱーを出しました');
//   } else {
//     console.log('エラー');
//   }
//   rl.close();
// });
