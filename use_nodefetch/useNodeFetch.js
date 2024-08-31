import fetch from 'node-fetch'

const responses = await Promise.all([
  await fetch('https://github.com/'),
  await fetch('https://yahoo.co.jp/')
]);

console.log(responses);

const responsesAllSettled = await Promise.allSettled([
  await fetch('https://github.com/'),
  await fetch('https://yahoo.co.jp/')
]);

console.log(responsesAllSettled);