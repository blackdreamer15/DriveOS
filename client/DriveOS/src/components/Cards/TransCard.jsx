"use client";
import React from "react";
import CountUp from "react-countup";

const TransCard = ({title}) => {
  return (
    <div className="bg-[#f5ffff] py-2 px-4 shadow rounded-xl">
      <div className="flex flex-row space-x-20 items-center">

      <div>
        <h2 className="text-[#1D3261] font-semibold text-base">
          {title}
        </h2>
        <CountUp
          end={1320}
          duration={3.2}
          decimals={2}
          decimal="."
          prefix="₵ "
          className="text-2xl text-black font-bold"
          />
        </div>
        <img src={'/icons8-chart-48.png'} width={100} height={100} alt="chart" className="w-16 h-18" />
      </div>
      <span className="text-sm text-slate-400">You made an extra <CountUp
          end={800}
          duration={3.2}
          decimals={2}
          decimal="."
          prefix="₵ "
          className="text-sm text-slate-500 font-semibold"
          /> this week</span>
    </div>
  );
};

export default TransCard;
