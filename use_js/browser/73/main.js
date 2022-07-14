/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            const newVal = val + target;
            setTimeout(callback.bind(null, `${val} + ${target} = ${newVal}`), 1000);
            //callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            setTimeout(callback.bind(null, `${val} - ${target} = ${newVal}`), 1000);
            //callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            setTimeout(callback.bind(null, `${val} x ${target} = ${newVal}`), 1000);
            //callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            setTimeout(callback.bind(null, `${val} / ${target} = ${newVal}`), 1000);
            //callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

const calc = calcFactory(10, console.log);
calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);