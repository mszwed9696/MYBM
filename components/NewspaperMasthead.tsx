export default function NewspaperMasthead({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="newspaper-masthead text-center py-8 animate-unfold">
      {/* Top ornamental line */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 border-t-2 border-black"></div>
        <div className="mx-4">★</div>
        <div className="flex-1 border-t-2 border-black"></div>
      </div>

      {/* Main title */}
      <h1 className="font-headline font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-2">
        {children}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-newspaper text-sm md:text-base italic border-t border-b border-black py-1 inline-block px-8">
          {subtitle}
        </p>
      )}

      {/* Bottom ornamental line */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex-1 border-t-2 border-black"></div>
        <div className="mx-4">★</div>
        <div className="flex-1 border-t-2 border-black"></div>
      </div>
    </div>
  );
}
