const ansi = require('sisteransi');
 
const p = str => process.stdout.write(str);
 
// move cursor to 2, 1
//p(ansi.cursor.to(2, 1));
 
// to up, one down
//p(ansi.cursor.down(10));

//p(ansi.cursor.move(0,10));

//p(ansi.cursor.forward(10));
//p(ansi.cursor.backward(10));

//p(ansi.cursor.forward(12) + ansi.cursor.backward(11));

