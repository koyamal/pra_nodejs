import { v4 as uuidv4 } from 'uuid';

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

bookB.calPrice && bookB.calPrice();

console.log(bookA);

if(bookA.author === bookB.author) {
  console.log(`${bookA.bookName}と${bookB.bookName}の筆者は${bookA.author}`);
} else {
  console.log(`${bookA.bookName}と${bookB.bookName}の筆者は異なります。`)
}