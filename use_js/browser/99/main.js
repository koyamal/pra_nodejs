/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator{
  constructor(){
    this.val = 0;
    this.func = function(val){
      this.val = val
    }
  }

  set(val){
    this.func(val);
    return this;
  }

  plus(){
    this.func = function(val){
      this.val = this.val + val;
      console.log(this.val);
    }
    return this;
  }

  minus(){
    this.func = function(val){
      this.val = this.val - val;
      console.log(this.val);
    }
    return this;
  }

  mutiply(){
    this.func = function(val){
      this.val = this.val * val;
      console.log(this.val);
    }
    return this;
  }

  divide(){
    this.func = function(val){
      this.val = this.val / val;
      console.log(this.val);
    }
    return this;
  }


}

const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.mutiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
