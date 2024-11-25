import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'glass' | 'gradient' | 'default';
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = "group relative overflow-hidden rounded-xl transition-all duration-300";
  
  const variantStyles = {
    default: "bg-white shadow-sm hover:shadow-md p-6",
    glass: "backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl p-6",
    gradient: "p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === 'gradient' ? (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-full">
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            {children}
          </div>
        </div>
      ) : (
        <>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            {children}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 opacity-0 
            transition-opacity duration-300 rounded-xl group-hover:opacity-100" />
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity" />
        </>
      )}
    </div>
  );
};

export default Card; 