import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);

const cT = () => {
  const currentUtc = dayjs().utc();
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss');
}

console.log(cT());

const roundSecond = (rowSecond: number, unitValue: number) => {
  const remainder = rowSecond % unitValue;
  if (remainder === 0) {
    return rowSecond;
  }else {
    return rowSecond + (unitValue - remainder);
  }
}

const amari = (val: number) => {
  const val2 = dayjs().second();
  console.log(val2);
  const amari = val2 % 5;
  return  val2 + (5 - amari);
};

console.log(amari(12))