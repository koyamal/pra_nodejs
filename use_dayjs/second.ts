import dayjs from "dayjs"

const cT = () => {
  const currentUtc = dayjs().utc();
  return currentUtc.add(9, 'hour').format('YYYY-MM-DD HH:mm:ss');
}

console.log(cT());