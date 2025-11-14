export default function NewspaperBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-5 border-black bg-white p-4 ${className}`}>
      {/* Ornamental corner decorations */}
      <div className="relative border-3 border-black p-6">
        {/* Top left corner ornament */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-black"></div>
        {/* Top right corner ornament */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-3 border-r-3 border-black"></div>
        {/* Bottom left corner ornament */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-3 border-l-3 border-black"></div>
        {/* Bottom right corner ornament */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-black"></div>

        {children}
      </div>
    </div>
  );
}
