import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);

const roundUpSecond = (rowSecond: number, unitValue: number) => {
  const remainder = rowSecond % unitValue;
  return rowSecond + (unitValue - remainder);
}

const roundUpMinute = (rowSecond: number, unitValue: number) => {
  const remainder = rowSecond % unitValue;
  const arrayBox = [rowSecond, unitValue];
  const finded = arrayBox.find(d => d === 12);
  console.log(finded? 'finded.': 'not finded');
  return rowSecond + (unitValue - remainder);
}

const ceilTimestamp = () => {
  const currentUtc = dayjs().utc();
  const currentUtcString = currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm');
  return dayjs(currentUtcString).add(roundUpSecond(currentUtc.second(), 5), 's').format('YYYY-MM-DD HH:mm:ss');
}

console.log(ceilTimestamp());

roundUpMinute(1, 2);
