// const messageText2: string | undefined = undefined;
const messageText2: string | undefined = "haelloWorld";

console.log(messageText2!.slice(1, 2));
// console.log(messageText2.slice(1, 2));

interface books {
  bookName: string;
  author: string;
}

const bookA: books = {
  bookName: '猫飼ってみた',
  author: '冬肘掃除'
}

const envTableName: string = 'is_this_table';

console.log(bookA.bookName);