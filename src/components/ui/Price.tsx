interface PriceProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Price({ amount, size = 'md', className = '' }: PriceProps) {
  const formatted = amount.toLocaleString('es-UY');
  
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-lg', 
    lg: 'text-2xl md:text-3xl'
  };
  
  return (
    <span className={`inline-flex items-baseline gap-1 ${sizeStyles[size]} ${className}`}>
      <span className="text-[#D8A0D8]/80 text-[0.75em] font-semibold">$</span>
      <span className="font-display font-semibold text-[#D8A0D8] tabular-nums tracking-wide">
        {formatted.replace('$', '')}
      </span>
    </span>
  );
}
