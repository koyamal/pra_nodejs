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
  price?: number;
  bookId: string;
}

const bookA: books = {
  bookId: uuidv4(),
  bookName: '猫飼ってみた',
  author: '冬肘掃除',
  price: 498,
}

const bookB: books = {
  bookId: uuidv4(),
  bookName: '犬が逃げた',
  author: '佐々木亮介',
  price: 628,
}

console.log(bookA);

if(bookA.author === bookB.author) {
  console.log(`${bookA.bookName}と${bookB.bookName}の筆者は${bookA.author}`);
} else {
  console.log(``)
}