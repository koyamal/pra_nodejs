import dayjs from 'dayjs';
import DayJSUtc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';

type inputFunc = {
  type: 'A' | 'B' | 'C';
  value: '1' | '2';
};

const customFunc = (val: inputFunc) => {

}

const customConsole = (val: object): void => {
  console.log(val);
}

dayjs.extend(timezone);
dayjs.extend(DayJSUtc);

const nowNoTz = dayjs();
const nowTokyo = dayjs().tz("Asia/Tokyo");

customConsole({nowNoTz});
customConsole({nowTokyo});

export {customConsole}