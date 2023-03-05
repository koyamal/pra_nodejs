function genIterator(max){
    let i = 0;

    return{
        next: function(){
            if(i >= max){
                return {
                    done: true
                }
            }else{
                return {
                    done: false,
                    value: i++
                }
            }
        }
    }
}

const it = genIterator(10);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let a = it.next();
while(!a.done){
    console.log(a.value);
    a = it.next();
}