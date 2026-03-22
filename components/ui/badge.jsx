import { cn } from '@/lib/utils';

export function Badge({ children, className }) {
  return (
    <span className={cn('inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark', className)}>
      {children}
    </span>
  );
}
