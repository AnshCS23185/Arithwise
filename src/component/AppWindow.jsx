import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const MAP = {
  about: { title: "This Company", component: <About /> },
  services: { title: "Services", component: <Services /> },
  contact: { title: "Contact Us", component: <Contact /> },
};

export default function AppWindow({ app, onClose }) {
  if (!app) return null;

  return (
    <div
      className="absolute right-12 top-12 w-[480px] h-[520px]
      glass animate-window rounded-xl text-white z-30"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-sm">{MAP[app].title}</span>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-4 text-sm overflow-y-auto h-[calc(100%-40px)]">
        {MAP[app].component}
      </div>
    </div>
  );
}
