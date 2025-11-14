export default function NewspaperDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="flex-1 border-t-2 border-black"></div>
      <div className="mx-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ornamental diamond pattern */}
          <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="black" stroke="black" strokeWidth="2"/>
          <path d="M20 10 L30 20 L20 30 L10 20 Z" fill="white" stroke="black" strokeWidth="1"/>
        </svg>
      </div>
      <div className="flex-1 border-t-2 border-black"></div>
    </div>
  );
}
