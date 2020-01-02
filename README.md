# Antd@4 使用 dayjs 替代 moment

## 组件

### DatePicker

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;

```

### TimePicker

```tsx
import { Dayjs } from 'dayjs';
import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Omit } from 'antd/es/_util/type';

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;

```

### Calendar

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;

```

## 如何使用此 Demo

使用 `src/components` 中的组件替换掉 antd 的 `DatePicker, Calendar`，使用 `<DatePicker picker="time" />` 替代 antd 的`<TimePicker/>`。

```diff
- import { DatePicker, Calendar } from 'antd';
- import format from 'moment';
+ import { DatePicker,Calendar } from '@/components';
+ import format from 'dayjs';
```

如 `src/pages/index.tsx`

## 有什么好处

使用 `dayjs` 比 `moment` 产物包，小了 `0.55MB` 左右

### moment

```bash
File sizes after gzip:

  291.96 KB  dist/umi.js
  14.61 KB   dist/umi.css
```

![moment2.07MB](./moment.png)

### dayjs

```bash
File sizes after gzip:

  207.52 KB  dist/umi.js
  14.49 KB   dist/umi.css
```

![dayjs1.52MB](./dayjs.png)
