import IpForm from "./IpForm";
import ResultSection from "./ResultSection";
import DesktopPattern from "../images/pattern-bg-desktop.png";

function Header() {
  return (
    <div className="relative flex justify-center min-h-[18rem]">
      <img src={DesktopPattern} className="w-screen  max-h-3/12 " alt="" />
      <h1 className="absolute top-[3rem] font-bold text-white text-2xl">
        IP Address Tracker
      </h1>
      <IpForm />
      <ResultSection />
    </div>
  );
}

export default Header;
