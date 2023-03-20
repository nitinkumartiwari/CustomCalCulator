import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  dv_mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5rem",
  },

  dv_container: {
    margin: "4rem",
  },

  dv_caleder_month: {
    position: "relative",
    backgroundColor: "#040404",
    border: "solid 1px #040404",
    clipPath: "inset(0px round 0.5rem)",
  },

  sec_calender_month_section: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#040404",
    padding: "10px",
    color: "#ffffff",
  },

  dv_selected_month: {
    fontSize: "18px",
    fontWeight: "600",
    paddingLeft: "10px",
  },

  ol_week_days: {
    color: "grey",
    fontSize: "18px",
    backgroundColor: "#040404",
    padding: "10px 0px 5px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",

    marginTop: "0px",
  },

  li_week_days: {
    padding: "0",
    margin: "0",
    listStyle: "none",
    textAlign: "center",
    paddingRight: "20px",
  },

  ol_days_grid: {
    display: "grid",
    padding: "10px 0px 5px 0px",
    gridTemplateColumns: "repeat(7, 1fr)",
    height: "100%",
    position: "relative",
    gridColumnGap: "var(--grid-gap)",
    gridRowGap: "var(--grid-gap)",
    borderTop: "solid 1px var(--grey-200)",
  },

  li_calender_day: {
    display: "grid",
    margin: "0",
    listStyle: "none",
    position: "relative",
    minHeight: "40px",
    fontSize: "16px",
    color: "#cac8c8",
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "var(--day-label-size)",
      height: "var(--day-label-size)",
    },
  },

  li_today: {
    backgroundColor: "#5a76ffc4",
    borderRadius: "4px",
    border: "1px solid #5a76ffc4",
    "& span": {
      backgroundColor: "#5a76ffc4",
    },
  },

  li_noToday: {
    backgroundColor: "var(--grey-100)",
    color: "#cac8c8",
  },
});
