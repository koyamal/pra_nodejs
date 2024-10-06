import dayjs from 'dayjs';
import DayJSUtc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);
dayjs.extend(DayJSUtc);
console.log(dayjs());

dayjs().tz("Asia/Tokyo")