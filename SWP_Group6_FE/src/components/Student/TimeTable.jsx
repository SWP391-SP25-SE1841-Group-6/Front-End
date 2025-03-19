import { Badge, Calendar } from 'antd';

const TimeTable = (value) => {
  let listData = [];
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'success', content: 'Rối Loạn Trầm Cảm' },
        { type: 'success', content: '9:30-11:45' },
        { type: 'warning', content: 'Sang Chấn Tâm Lý – PTSD.' },
        { type: 'warning', content: '12:30-14:45.' },
      ];
      break;
    case 2:
      listData = [
        { type: 'warning', content: 'Sang Chấn Tâm Lý – PTSD.' },
        { type: 'warning', content: '7:00-9:30.' },
        { type: 'warning', content: 'Sang Chấn Tâm Lý – PTSD.' },
        { type: 'warning', content: '12:30-14:45.' },
        // { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 4:
      listData = [
        { type: 'warning', content: 'Rối Loạn Lo Âu' },
        { type: 'warning', content: '7:00 - 9:00' },
        { type: 'warning', content: 'Rối Loạn Trầm Cảm' },
        { type: 'warning', content: '9:30 - 11:45.' },
      ];
      break;
      case 5:
        listData = [
          { type: 'warning', content: 'Rối Loạn Lo Âu' },
          { type: 'warning', content: '7:00 - 9:00' },
          { type: 'warning', content: 'Rối Loạn Trầm Cảm' },
          { type: 'warning', content: '9:30 - 11:45.' },
        ];
        break;
    default:
  }
  return listData;
};

export default function CalendarComponent() {
  const dateCellRender = (value) => {
    
    const listData = TimeTable(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const monthCellRender = (value) => {
    const num = value.month() === 8 ? 1394 : null;
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
}
