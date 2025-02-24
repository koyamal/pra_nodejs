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
      return 2;
    },
    f: {
      g: function() {
        console.log('g in f in c');
        return 1;
      },
      j: {
        k: function() {
          console.log('k in j in f in c');
          return 0;
        }
      }
    }
  }
}

const inputText = 'c'

operation['a']();
operation['b']();
operation[inputText]['d']();
const h = operation[inputText]['f']['g'];
h();

const i = operation[inputText]['f'];
i.g();
i.g();

operation[inputText]['f']['j']['k']();