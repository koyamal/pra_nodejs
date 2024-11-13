import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);



const roundSecond = (rowSecond: number, unitValue: number, das: string) => {
  const remainder = rowSecond % unitValue;

  return dayjs(das).add(rowSecond + (unitValue - remainder), 's')
  // return rowSecond + (unitValue - remainder);

}

const amari = (val: number) => {
  const val2 = dayjs().second();
  console.log(val2);
  const amari = val2 % 5;
  return  val2 + (5 - amari);
};

const cT = () => {
  const currentUtc = dayjs().utc();
  console.log(currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss'))
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:') + roundSecond(currentUtc.second(), 5);
}

console.log(cT());
