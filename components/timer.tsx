import * as React from "react";

import { Label } from "./ui/label";

interface TimerProps {
  initialTime: number;
}

export function Timer({ initialTime }: TimerProps) {
  const [time, setTime] = React.useState<number>(initialTime);

  React.useEffect(() => {
    if (time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  return <Label>Time Remaining: {time} seconds</Label>;
}
