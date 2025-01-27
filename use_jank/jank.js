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
const jadgeJank = (userHand, cpuHand) => {
    switch (userHand) {
        case 1:
            switch (cpuHand) {
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
            switch (cpuHand) {
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
            switch (cpuHand) {
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
};
const rl = readline.createInterface(node_process_1.stdin, node_process_1.stdout);
const handAndText = {
    1: 'ぐー',
    2: 'ちょき',
    3: 'ぱー'
};
let cpuHand = 1;
let userHand = 1;
const rand = Math.random();
if (rand < 0.3) {
    cpuHand = 1;
}
else if (rand < 0.6) {
    cpuHand = 2;
}
else {
    cpuHand = 3;
}
let playFlag = true;
const playJanken = () => {
    rl.question("じゃんけん(1.ぐー、2.ちょき、3.ぱー)：", answer => {
        console.log(answer);
        if (answer === '1') {
            userHand = 1;
        }
        else if (answer === '2') {
            userHand = 2;
        }
        else if (answer === '3') {
            userHand = 3;
        }
        else {
            console.log('エラー');
            rl.close();
            return;
        }
        console.log(`あなたは${handAndText[userHand]}を出しました`);
        rl.question('結果を見ますか？(y/n)：', input => {
            if (input === 'y') {
                console.log(`相手は${handAndText[cpuHand]}を出しました`);
                console.log(`結果：${jadgeJank(userHand, cpuHand)}`);
            }
            rl.question('もう一度遊びますか？(y/n)：', input => {
                if (input === 'y') {
                    playJanken();
                    console.log(`じゃんけん`);
                }
                else {
                    playFlag = false;
                    rl.close();
                    console.log('bye');
                }
            });
        });
    });
};
