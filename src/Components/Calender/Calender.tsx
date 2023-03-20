import moment from "moment";
import {
  createDaysForCurrentMonth,
  getWeekday,
  WEEKDAYS,
} from "../../GeneralUtills";
import { useStyles } from "./style";

interface IProps {
  date?: string;
}

const Calender: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const { date } = props;
  const today = moment(date, "DD/MM/YYYY");
  const month = today.format("MMMM");
  const monthInNum = today.format("M");
  const year = today.format("YYYY");

  const renderWeekDays = () => {
    const weekdays = WEEKDAYS.map((day, index) => {
      return <li className={classes.li_week_days}>{day}</li>;
    });
    return weekdays;
  };

  const renderDays = () => {
    const currentMonthDays = createDaysForCurrentMonth(year, monthInNum, today);
    const days = currentMonthDays.map((day, index) => {
      return (
        <li
          className={`${classes.li_calender_day} ${
            day.date == date ? classes.li_today : classes.li_noToday
          }`}
          key={day.dayOfMonth}
        >
          <span>{day.dayOfMonth}</span>
        </li>
      );
    });

    return days;
  };

  return (
    <div className={classes.dv_mainContainer}>
      <div className={classes.dv_caleder_month}>
        <section className={classes.sec_calender_month_section}>
          <div className={classes.dv_selected_month}>
            {`${month} 
           ${year}`}
          </div>
        </section>
        <ol className={classes.ol_week_days}>{renderWeekDays()}</ol>
        <ol className={classes.ol_days_grid}>{renderDays()}</ol>
      </div>
    </div>
  );
};
export default Calender;
