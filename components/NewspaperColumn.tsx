export default function NewspaperColumn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-l-2 border-r-2 border-black px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}
