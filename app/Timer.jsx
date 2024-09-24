import { clsx } from "clsx";
import { Bell } from "lucide-react";

export const Timer = ({ timer }) => {
  const endAt = new Date(timer.endAt);

  const timeText = getTimeText(timer.timeLeft);
  return (
    <div
      className={clsx(
        "relative flex size-[224px] flex-col gap-2 rounded-2xl bg-base-200 p-4",
        {
          "brightness-75": timer.timeLeft === 0,
        }
      )}
    >
      <div className="relative flex size-full flex-col items-center justify-center gap-1">
        {/* {timer.id} */}
        <div className="flex items-center justify-between gap-2">
          <Bell size={16} className="text-neutral-content" />
          <p>{`${endAt.getHours()}:${endAt
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}</p>
        </div>
      </div>
    </div>
  );
};

const millisecondsToHMS = (ms) => {
  const hrs = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);

  return {
    hrs,
    mins: mins,
    secs,
  };
};

const padHMS = (timeHMS) => ({
  hrs: String(timeHMS.hrs).padStart(2, "0"),
  mins: String(timeHMS.mins).padStart(2, "0"),
  secs: String(timeHMS.secs).padStart(2, "0"),
});

const getTimeText = (timeLeft) => {
  const timeLeftHMS = millisecondsToHMS(timeLeft);
  const timeLeftPadHSM = padHMS(timeLeftHMS);

  const durationText = `${timeLeftPadHSM.mins}:${timeLeftPadHSM.secs}`;

  if (timeLeftHMS.hrs) {
    durationText = `${timeLeftPaHSM.hrs}:${durationText}`;
  }
};
