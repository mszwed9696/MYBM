interface NewspaperGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function NewspaperGrid({ children, columns = 3, className = "" }: NewspaperGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-0 border-5 border-black bg-white ${className}`}>
      {children}
    </div>
  );
}

export function NewspaperGridItem({ children, className = "", span = 1 }: { children: React.ReactNode; className?: string; span?: 1 | 2 | 3 }) {
  const spanClasses = {
    1: '',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  };

  return (
    <div className={`border-r-2 border-black last:border-r-0 p-6 newspaper-article ${spanClasses[span]} ${className}`}>
      {children}
    </div>
  );
}
