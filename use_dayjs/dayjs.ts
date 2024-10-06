import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);
console.log(dayjs());

dayjs().tz("Asia/Tokyo")