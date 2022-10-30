import React from "react";
import { useSelector } from "react-redux";
import { status } from "../@types/invoice";
import { StoresInterface } from "../@types/store";
import { GoPrimitiveDot } from "react-icons/go";
import "./styles/statusInfo.css"

interface StatusInfoInterface {
  status: status;
}

const color = {
  paid: ["51", "214", "159"],
  pending: ["255", "143", "0"],
  draft: ["223", "227", "250"],
};

const StatusInfo = ({status}: StatusInfoInterface) => {
  return (
    <div
      className="StatusInfo"
      style={{
        color: `rgb(${color[status][0]},${color[status][1]},${color[status][2]})`,
        background: `rgba(${color[status][0]},${color[status][1]},${color[status][2]},0.1)`,
      }}
    >
        <GoPrimitiveDot/>
      {status.charAt(0).toUpperCase() + status.substring(1)}
    </div>
  );
};

export default StatusInfo;
