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

//p(ansi.cursor.nextLine(12));

//p(ansi.cursor.prevLine(3));

//p(ansi.cursor.hide);

//p(ansi.cursor.show);

//p(ansi.cursor.left);

//p(ansi.scroll.up(200));
//p(ansi.scroll.down(10));

//p(ansi.erase.screen);
//p(ansi.erase.up(4));

//p(ansi.erase.line);
p(ansi.erase.lines(4));