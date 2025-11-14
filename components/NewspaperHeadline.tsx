interface NewspaperHeadlineProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  centered?: boolean;
}

export default function NewspaperHeadline({
  children,
  level = 1,
  className = "",
  centered = false
}: NewspaperHeadlineProps) {
  const baseClasses = "font-headline font-black uppercase tracking-tight leading-none text-black";

  const sizeClasses = {
    1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
    2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    3: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${centered ? 'text-center' : ''} ${className}`}>
      <span className="inline-block border-b-4 border-black pb-2">
        {children}
      </span>
    </Tag>
  );
}
