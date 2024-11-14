import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);



const roundSecond = (rowSecond: number, unitValue: number) => {
  const remainder = rowSecond % unitValue;
  return rowSecond + (unitValue - remainder);
}




const cT = () => {
  const currentUtc = dayjs().utc();
  const currentUtcString = currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm');
  return dayjs(currentUtcString).add(roundSecond(currentUtc.second(), 5), 's').format('YYYY-MM-DD HH:mm:ss');
}

console.log(cT());
