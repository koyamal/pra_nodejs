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
    }
  }
}

operation['a']();
operation['b']();