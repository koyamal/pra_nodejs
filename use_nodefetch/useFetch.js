import fetch from 'node-fetch'

const responses = await Promise.all([
  await fetch('https://github.com/'),
  await fetch('https://yahoo.co.jp/'),
  await fetch('https://sdkfaswaera.fdsfsfs')
]);

console.log(responses);

const responsesAllSettled = await Promise.allSettled([
  await fetch('https://github.com/'),
  await fetch('https://yahoo.co.jp/'),
  await fetch('https://sdkfaswaera.fdsfsfs')
]);

console.log(responsesAllSettled);