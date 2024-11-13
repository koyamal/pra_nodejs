import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);

const cT = () => {
  const currentUtc = dayjs().utc();
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss');
}

console.log(cT());

const amari = (val: number) => {
  const amari = val % 5;
};

console.log(amari(12))