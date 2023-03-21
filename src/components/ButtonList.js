import React from "react";
import Button from "./Button";

const data_arr = [
  "Cricket",
  "React",
  "Redux",
  "Throttling",
  "Debouncing",
  "Reconcillation",
  "Reducer",
  "Actions",
  "Context",
  "IIFE",
  "API",
  "ComponentDidMount",
  "ComponentDidUpdate",
  "ComponentWillUnmount",
];
const ButtonList = () => {
  return (
    <div className="flex gap-4 m-2 ml-2">
      {data_arr.map((dataList, index) => (
        <Button key={index} name={dataList} />
      ))}
    </div>
  );
};

export default ButtonList;
