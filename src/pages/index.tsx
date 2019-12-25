import React from 'react';
// 这里是 antd 现在官方的写法
// import { DatePicker, Calendar, TimePicker } from 'antd';
// import format from 'moment';

// 这里是使用 dayjs 的写法
import { DatePicker,Calendar ,TimePicker} from '@/components';
import format from 'dayjs';

import styles from './index.css';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default function() {
  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode);
  }
  return (
    <div className={styles.normal}>
      <div>
        <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker onChange={onChange} placeholder="Select week" />
      </div>
      <Calendar onPanelChange={onPanelChange} />
      <div>
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} size="large" />
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} />
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} size="small" />
      </div>
    </div>
  );
}
