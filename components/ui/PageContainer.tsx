import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageContainer({ 
  children, 
  title, 
  description, 
  className = "" 
}: PageContainerProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {title && (
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </div>
  );
}
