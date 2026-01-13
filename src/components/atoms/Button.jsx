import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  loading, 
  fullWidth, 
  onClick, 
  disabled, 
  className = '' 
}) => {
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-sm",
    secondary: "bg-red-900 text-white hover:bg-red-800 shadow-sm",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
    ghost: "text-blue-900 hover:bg-gray-100",
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'} ${className}`}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          Processing...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
