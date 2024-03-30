import { useState, createContext } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import axios from "axios";
export const ipAddressContext = createContext(null);
export const resultDataContext = createContext(null);
function App() {
  const [locationName, setLocationName] = useState("--");
  const [ipAddress, setIpAddress] = useState("");
  const [resultIpAddress, setResultIpAddress] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [ISP, setISP] = useState("");
  const handleTrack = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_iAVaf8GYqsUqFt5OJmJ6Q8sh5U8UI&ipAddress=${ipAddress}`
      )

      .then((response) => {
        const { data } = response;
        console.log(data);
        setResultIpAddress(ipAddress);
        setTimeZone(data.location.timezone);
        setLocationName(data.location.region);
        setISP(data.isp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative font-Rubik h-screen overflow-x-hidden">
      <ipAddressContext.Provider
        value={{ ipAddress, setIpAddress, handleTrack }}
      >
        <resultDataContext.Provider
          value={{ resultIpAddress, locationName, timeZone, ISP }}
        >
          <Header />
        </resultDataContext.Provider>
      </ipAddressContext.Provider>
      <Map locationName={locationName} />
    </div>
  );
}

export default App;
