import { useEffect, useState } from "react";
import "./style.css";

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
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      Today is
      {" "}
      {dateFormat(date)}
    </p>
  );
};

export default Clock;
