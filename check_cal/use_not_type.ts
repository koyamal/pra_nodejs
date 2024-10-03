import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const envTableName: string = 'is_this_table';
const envFlag: boolean = true;

const outputText: string = `Output Text is ${envFlag? envTableName: 'no_table'}.`;

console.log(outputText);

// const messageText2: string | undefined = undefined;
const messageText2: string | undefined = "haelloWorld";

console.log(messageText2!.slice(1, 2));
// console.log(messageText2.slice(1, 2));

interface books {
  bookName: string;
  author: string;
  price: number;
  bookId: string;
  summary?: string;
  calPrice?: () => void;
}

const bookA: books = {
  bookId: uuidv4(),
  bookName: '猫飼ってみた',
  author: '冬肘掃除',
  price: 498,
  summary: '猫を拾ったヒロシが猫を飼う中で成長する物語'
}

const bookB: books = {
  bookId: uuidv4(),
  bookName: '犬が逃げた',
  author: '佐々木亮介',
  price: 628,
  calPrice() {
    console.log(`${this.author}は${this.bookName}を書きました`)
  },
}
bookA.calPrice && bookA.calPrice();
bookB.calPrice && bookB.calPrice();

console.log(bookA);

if(bookA.author === bookB.author) {
  console.log(`${bookA.bookName}と${bookB.bookName}の筆者は${bookA.author}`);
} else {
  console.log(`${bookA.bookName}と${bookB.bookName}の筆者は異なります。`)
}

function test<T>(arg: T): T {
  return arg;
}

console.log(test<string>('hello'));
console.log(test<number>(4));
console.log(test<string[]>(['hello']));

console.log(dayjs());
const startDate = '2024/10/03 12:30';
console.log(dayjs(startDate));

console.log(dayjs(startDate).isBefore(dayjs()));

if(dayjs(startDate).isBefore(dayjs())) {
  console.log('before');
} else {
  console.log('after');
}

const iso8061DateJST = '2024-10-03T12:00:00+0900';
const iso8061DateUTC = '2024-10-03T03:00:00Z';
const iso8061DateUTC2 = '2024-10-03T03:00:00.000000001Z';

if(dayjs(iso8061DateJST).toISOString() === dayjs(iso8061DateUTC).toISOString()) {
  console.log(`${iso8061DateJST}と${iso8061DateUTC}は同じ時刻`);
} else {
  console.log(`${iso8061DateJST}と${iso8061DateUTC}は違う時刻`);
}

console.log(dayjs(iso8061DateJST).toISOString());
console.log(dayjs(iso8061DateUTC).toISOString());
console.log(dayjs(iso8061DateUTC2).toISOString());