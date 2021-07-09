const fsAsync = require('fs');

const first = fsAsync.readFileSync('./content/first.txt', 'utf8');
const second = fsAsync.readFileSync('./content/second.txt','utf8');

console.log(first, second);

fsAsync.writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a'})