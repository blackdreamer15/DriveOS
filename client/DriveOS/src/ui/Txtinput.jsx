import React from "react";

const Txtinput = ({placeholder, type, icon, value, label, onchange}) => {
  return (
    <div>
      {label && <span className="block text-[#1D3261] font-medium mb-1">{label}</span>}
    <div className="w-full flex flex-row items-center rounded-md px-3 py-2 space-x-3 bg-[#F5FFFF] shadow focus-within:ring-1 focus-within:ring-blue-500">
      {icon && icon}
      <input
        type={type}
          placeholder={placeholder}
          onChange={onchange}
        className="w-full outline-none appearance-none placeholder:text-slate-400 text-slate-400"
        value={value}
      />
    </div>
    </div>
  );
};

export default Txtinput;
