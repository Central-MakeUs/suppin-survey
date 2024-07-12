import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type CardProps = ComponentProps<'div'>;

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-solid border-cmc_gray-5 bg-white px-5 py-6 shadow-[0px_0px_4px_0px_#00000040]',
        className
      )}
    >
      {children}
    </div>
  );
}
