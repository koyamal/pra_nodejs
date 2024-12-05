import dayjs from 'dayjs';
import DayJSUtc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';

type inputFunc = {
  type: 'A' | 'B' | 'C';
  value: '1' | '2';
};

const customFunc = (val: inputFunc) => {
  if(val.type === 'A') {
    if(val.value === '1') {
      console.log("Value is 1");
    } else if(val.value === '2') {
      
    }
    console.log("This is type A");
  } else if (val.type === 'B') {
    console.log("This is type B");
  } else if (val.type === 'C') {
    console.log("This is type B");  
  }
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

export {customConsole, customFunc}