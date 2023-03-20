import moment from "moment";

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const getNumberOfDaysInMonth = (date: string) => {
  return moment(date).daysInMonth();
};

export const getWeekday = (date: string) => {
  return moment(date).weekday();
};

export const createDays = (year: string, month: string, date: any) => {
  return [...Array(getNumberOfDaysInMonth(date))].map((day, index) => {
    return {
      date: moment(`${year}-${month}-${index + 1}`).format("DD/MM/YYYY"),
      dayOfMonth: index + 1,
      isCurrentMonth: true,
    };
  });
};

export const createDaysForCurrentMonth = (
  year: string,
  month: string,
  date: any
) => {
  const currentMonthDays = createDays(year, month, date);
  var dt = moment(currentMonthDays[0].date, "DD/MM-YYYY")
    .format("dddd")
    .substring(0, 3);
  const length = WEEKDAYS.indexOf(dt);
  const restArray = [];
  for (let i = 0; i < length; i++) {
    restArray.push({
      date: "",
      dayOfMonth: "",
      isCurrentMonth: false,
    });
  }
  const days = [...restArray, ...currentMonthDays];
  return days;
};
