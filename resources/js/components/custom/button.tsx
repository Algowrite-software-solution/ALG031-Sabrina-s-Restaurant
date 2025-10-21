import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'red-and-white' | 'outline-light' | 'outline-dark';
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'red-and-white', 
  href, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseClasses = `
    font-cormorant leading-none tracking-[.05em] transition-colors duration-300
    px-8 py-3 text-center inline-block
  `;

  const variantClasses = {
    'red-and-white': `
      bg-transparent text-pure-white border-2 border-deep-red
      hover:bg-deep-red hover:bg-opacity-75 hover:text-white
    `,
    'outline-light': `
      bg-transparent text-pure-white border-2 border-pure-white
      hover:bg-pure-white hover:text-deep-red
    `,
    'outline-dark': `
      bg-transparent text-deep-red border-2 border-deep-red
      hover:bg-deep-red hover:text-pure-white
    `,
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}