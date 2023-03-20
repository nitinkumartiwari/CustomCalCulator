import React from "react";
import { render, screen } from "@testing-library/react";
import Calender from "./Calender";
import moment from "moment";

const date = moment().format("DD/MM/YYYY");
const defaultProps = { date };
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

it("It should render first Row of Calender", () => {
  render(<Calender {...defaultProps} />);
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const text = screen.getByText(`${month} ${year}`);
  expect(text).toBeInTheDocument();
});

it("Should render List Of the Week", () => {
  render(<Calender {...defaultProps} />);
  WEEKDAYS.map((day) => {
    const text = screen.getByText(`${day}`);
    expect(text).toBeInTheDocument();
  });
});

it("Should Renderd Todays Date", () => {
  render(<Calender {...defaultProps} />);
  const todayDate = moment().format("DD");
  const text = screen.getByText(`${todayDate}`);
  expect(text).toBeInTheDocument();
});
