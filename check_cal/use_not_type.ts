// const messageText2: string | undefined = undefined;
const messageText2: string | undefined = "haelloWorld";

console.log(messageText2!.slice(1, 2));
// console.log(messageText2.slice(1, 2));

interface books {
  bookName: string;
}

const bookA: books = {
  bookName: '猫飼ってみた'
}

console.log(bookA.bookName);