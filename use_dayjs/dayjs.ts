import dayjs from 'dayjs';
import DayJSUtc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';

const customConsole = (val: object): void => {
  console.log(val);
}

dayjs.extend(timezone);
dayjs.extend(DayJSUtc);

const nowNoTz = dayjs();
const nowTokyo = dayjs().tz("Asia/Tokyo");

customConsole({nowNoTz});
customConsole({nowTokyo});