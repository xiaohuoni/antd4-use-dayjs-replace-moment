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

### Calendar

```tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;

```

### TimePicker

```tsx
import { Dayjs } from 'dayjs';

import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps, RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';
import warning from 'antd/es/_util/warning';
import { Omit } from 'antd/es/_util/type';

const { TimePicker: InternalTimePicker, RangePicker: InternalRangePicker } = DatePicker;

export interface TimeRangePickerProps extends RangePickerTimeProps<Dayjs> {}

const RangePicker = React.forwardRef<any, TimeRangePickerProps>((props, ref) => {
  return <InternalRangePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
  addon?: () => React.ReactNode;
}

const TimePicker = React.forwardRef<any, TimePickerProps>(
  ({ addon, renderExtraFooter, ...restProps }, ref) => {
    const internalRenderExtraFooter = React.useMemo(() => {
      if (renderExtraFooter) {
        return renderExtraFooter;
      }
      if (addon) {
        warning(
          false,
          'TimePicker',
          '`addon` is deprecated. Please use `renderExtraFooter` instead.',
        );
        return addon;
      }
      return undefined;
    }, [addon, renderExtraFooter]);

    return (
      <InternalTimePicker
        {...restProps}
        mode={undefined}
        ref={ref}
        renderExtraFooter={internalRenderExtraFooter}
      />
    );
  },
);

TimePicker.displayName = 'TimePicker';

type MergedTimePicker = typeof TimePicker & {
  RangePicker: typeof RangePicker;
};

(TimePicker as MergedTimePicker).RangePicker = RangePicker;

export default TimePicker as MergedTimePicker;

```

## 如何使用此 Demo

使用 `src/components` 中的三个组件替换掉 antd 的 `DatePicker, Calendar, TimePicker`

```js
import { DatePicker,Calendar ,TimePicker} from '@/components';
import format from 'dayjs';
```

替换

```js
import { DatePicker, Calendar, TimePicker } from 'antd';
import format from 'moment';
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
