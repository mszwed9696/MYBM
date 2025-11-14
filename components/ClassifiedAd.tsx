interface ClassifiedAdProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ClassifiedAd({ title, children, className = "" }: ClassifiedAdProps) {
  return (
    <div className={`classified-box animate-stamp ${className}`}>
      <h3 className="font-bold text-sm uppercase mb-2 border-b border-black pb-1">{title}</h3>
      <div className="text-xs leading-relaxed">{children}</div>
    </div>
  );
}
