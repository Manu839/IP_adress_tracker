import { useContext } from "react";
import ArrowIcon from "../images/icon-arrow.svg";
import { ipAddressContext } from "../App";
function IpForm() {
  const { ipAddress, setIpAddress, handleTrack } = useContext(ipAddressContext);

  return (
    <div className="absolute flex max-sm:w-10/12 w-screen justify-center top-[6.5rem] ">
      <input
        type="text"
        className="w-5/12 max-sm:w-full hover:cursor-pointer outline-none rounded-tl-xl rounded-bl-xl py-3 px-3"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={(e) => {
          setIpAddress(e.target.value);
        }}
      />
      <div
        className="w-12 hover:bg-VeryDarkGray hover:cursor-pointer flex content-center justify-center rounded-tr-xl rounded-br-xl bg-black"
        onClick={() => {
          handleTrack();
        }}
      >
        <img src={ArrowIcon} alt="" className="h-4 self-center" />
      </div>
    </div>
  );
}

export default IpForm;
