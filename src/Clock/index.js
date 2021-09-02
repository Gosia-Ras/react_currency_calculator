import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const dateFormat = (date) =>
  date.toLocaleDateString("en-GB", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>Today is {dateFormat(date)}</StyledClock>;
};

export default Clock;
