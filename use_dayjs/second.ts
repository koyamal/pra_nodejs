import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);

const roundSecond = (rowSecond: number, unitValue: number, das: string) => {
  const remainder = rowSecond % unitValue;
  return rowSecond + (unitValue - remainder);
}

const cT = () => {
  const currentUtc = dayjs().utc();
  console.log(currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss'))
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:') + roundSecond(currentUtc.second(), 5, currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm'));
}

console.log(cT());
