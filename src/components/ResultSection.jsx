import { useContext } from "react";
import { resultDataContext } from "../App";
function ResultSection() {
  const { resultIpAddress, locationName, timeZone, ISP } =
    useContext(resultDataContext);

  return (
    <div className="absolute z-50 flex max-sm:flex-col max-sm:top-48 max-sm:text-center max-sm:h-fit justify-evenly bottom-[-4.5rem] py-7 rounded-xl w-10/12 h-40 shadow-2xl bg-white">
      <div className="border-r pr-6 w-full px-7">
        <h4 className="uppercase text-sm font-medium text-DarkGray">
          Ip Address
        </h4>
        <p className="mt-2 text-xl font-medium ">
          {resultIpAddress ? resultIpAddress : "--"}
        </p>
      </div>
      <div className="border-r w-full px-7">
        <h4 className="uppercase text-sm font-medium text-DarkGray">
          Location
        </h4>
        <p className="mt-2 text-xl font-medium ">
          {locationName ? locationName : "--"}
        </p>
      </div>
      <div className="border-r w-full px-7">
        <h4 className="uppercase text-sm font-medium text-DarkGray">
          time zone
        </h4>
        <p className="mt-2 text-xl font-medium ">
          {timeZone ? timeZone : "--"}
        </p>
      </div>
      <div className="px-7 w-full">
        <h4 className="uppercase text-sm font-medium text-DarkGray">isp</h4>
        <p className="mt-2 text-xl font-medium ">{ISP ? ISP : "--"}</p>
      </div>
    </div>
  );
}

export default ResultSection;
