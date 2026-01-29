import { useState } from "react";
import Wallpaper from "./Walpaper";
import DesktopIcon from "./DesktopIcon";
import AppWindow from "./AppWindow";

export default function Desktop() {
  const [activeApp, setActiveApp] = useState(null);

  return (
    <div className="w-screen h-screen bg-[#0b0b12] relative overflow-hidden">
      <Wallpaper />

      <div className="absolute top-10 left-10 z-10 flex flex-col gap-8 items-center">
        <DesktopIcon
          icon={<img src="/icons/company.svg" alt="This Company" className="w-15 h-15" />}
          label="This Company"
          preview="Who we are & what we build"
          onOpen={() => setActiveApp("about")}
        />

        <DesktopIcon
          icon={<img src="/icons/services.svg" alt="Services" className="w-15 h-15" />}
          label="Services"
          preview="What we offer"
          onOpen={() => setActiveApp("services")}
        />

        <DesktopIcon
          icon={<img src="/icons/contact.svg" alt="Contact Us" className="w-15 h-15" />}
          label="Contact Us"
          preview="Let’s work together"
          onOpen={() => setActiveApp("contact")}
        />
      </div>

      <AppWindow app={activeApp} onClose={() => setActiveApp(null)} />

      <div className="absolute bottom-0 left-0 w-full h-10 glass flex items-center px-4 text-xs text-white z-20">
        © This Company
      </div>
    </div>
  );
}
