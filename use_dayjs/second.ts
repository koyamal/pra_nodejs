import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);



const roundSecond = (rowSecond: number, unitValue: number, das: string) => {
  const remainder = rowSecond % unitValue;

  console.log("e", dayjs(das).add(rowSecond + (unitValue - remainder), 's').format('YYYY-MM-DD HH:mm:ss'))
  // return dayjs(das).add(rowSecond + (unitValue - remainder), 's')
  return rowSecond + (unitValue - remainder);

}




const cT = () => {
  const currentUtc = dayjs().utc();
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:') + roundSecond(currentUtc.second(), 5, currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm'));
}

console.log(cT());
