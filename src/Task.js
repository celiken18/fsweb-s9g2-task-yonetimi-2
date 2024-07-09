import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const tarih = new Date(taskObj.deadline);
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    locale: tr,
  });

  const accentClass =
    differenceInDays(tarih, new Date()) <= 3 ? "normal" : "urgent";

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.1)] ">
      <h3 className="text-lg text-task">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className={`${accentClass} py-1 px-2 inline-block rounded-sm`}>
          {kalanGun}
        </span>
      </div>
      <p className="pt-2 pb-2 px-0 text-[parag] text-sm ">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-[5px] text-sm border-solid border-2 rounded-[30px] border-pill mr-1 mb-1.5  "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[fecc91] shadow-[0_4px_5px_rgb(0,0,0,0.05)] rounded-1 cursor-pointer border-0 "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
