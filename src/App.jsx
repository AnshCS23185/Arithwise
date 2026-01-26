import Desktop from "./component/Desktop";

export default function App() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#0b0b12] text-white p-6">
        <h1 className="text-xl mb-6">This Company</h1>
        <div className="space-y-4">
          <a className="block glass p-4 rounded-xl">About Us</a>
          <a className="block glass p-4 rounded-xl">Services</a>
          <a className="block glass p-4 rounded-xl">Contact</a>
        </div>
      </div>
    );
  }

  return <Desktop />;
}
