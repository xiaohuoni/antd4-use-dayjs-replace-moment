# Antd@4 使用dayjs替代moment

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
![moment2.07MB](./moment.png)

### dayjs
![dayjs1.52MB](./dayjs.png)
