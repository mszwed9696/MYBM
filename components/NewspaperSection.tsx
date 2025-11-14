interface NewspaperSectionProps {
  headline: string;
  byline?: string;
  children: React.ReactNode;
  dropCap?: boolean;
  className?: string;
}

export default function NewspaperSection({
  headline,
  byline,
  children,
  dropCap = false,
  className = ""
}: NewspaperSectionProps) {
  return (
    <article className={`newspaper-article animate-stamp ${className}`}>
      <h2 className="newspaper-headline">{headline}</h2>

      {byline && (
        <div className="newspaper-byline">
          By {byline}
        </div>
      )}

      <div className={`newspaper-body ${dropCap ? 'drop-cap' : ''}`}>
        {children}
      </div>
    </article>
  );
}
