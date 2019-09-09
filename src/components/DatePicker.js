import DatePicker1 from 'react-datepicker'
import React, {useState} from 'react'
export function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker1
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    );
  };

  export default DatePicker;