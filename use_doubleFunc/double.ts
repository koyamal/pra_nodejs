const operation = {
  a: function() {
    console.log('a');
  },
  b: function() {
    console.log('b');
  },
  c: {
    d: function(){
      console.log('d in c');
    },
    e: function() {
      console.log('e in c');
    },
    f: {
      g: function() {
        console.log('g in f in c');
      }
    }
  }
}

const inputText = 'c'

operation['a']();
operation['b']();
operation[inputText]['d']();
operation[inputText]['f']['g']();