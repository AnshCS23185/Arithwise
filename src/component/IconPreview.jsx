export default function IconPreview({ title, description }) {
  return (
    <div
      className="absolute left-full top-0 ml-4 w-48
      glass animate-preview text-white text-xs p-3 rounded-lg
      pointer-events-none"
    >
      <p className="font-medium">{title}</p>
      <p className="text-white/70 mt-1">{description}</p>
    </div>
  );
}
