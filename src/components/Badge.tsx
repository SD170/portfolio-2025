interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = "" }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
  
  const variantClasses = {
    default: "bg-gray-800/50 text-gray-300 border border-gray-700/50",
    primary: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    secondary: "bg-violet-500/20 text-violet-300 border border-violet-500/30"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
