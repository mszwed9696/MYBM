interface PullQuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export default function PullQuote({ children, author, className = "" }: PullQuoteProps) {
  return (
    <div className={`pull-quote animate-ink ${className}`}>
      <p>{children}</p>
      {author && (
        <p className="text-base mt-3 font-normal">
          — {author}
        </p>
      )}
    </div>
  );
}
