import dayjs from 'dayjs';
import DayJSUtc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);
dayjs.extend(DayJSUtc);

const nowNoTz = dayjs();
const nowTokyo = dayjs().tz("Asia/Tokyo");
console.log(nowTokyo);